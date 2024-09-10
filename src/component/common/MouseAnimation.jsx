import React, { useEffect, useRef } from "react";
import "./mouseAnimation.css";

const MouseAnimation = () => {
  const svgRef = useRef(null);
  const pointsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const svg = svgRef.current;
    const path = svg.querySelector("path");
    const segments = 80;

    const initPoints = (x, y) => {
      const initialPoints = [];
      for (let i = 0; i < segments; i++) {
        initialPoints.push({ x, y });
      }
      pointsRef.current = initialPoints;
    };

    const move = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      mouseRef.current = { x, y };


      if (pointsRef.current.length === 0) {
        initPoints(x, y);
      }
    };

    const anim = () => {
      if (pointsRef.current.length > 0) {
        let px = mouseRef.current.x;
        let py = mouseRef.current.y;

        const newPoints = pointsRef.current.map((p, index) => {
          let newPoint = { ...p };
          newPoint.x = px;
          newPoint.y = py;

          let n = pointsRef.current[index + 1];

          if (n) {
            px = px - (newPoint.x - n.x) * 0.6;
            py = py - (newPoint.y - n.y) * 0.6;
          }

          return newPoint;
        });

        pointsRef.current = newPoints;

        const pathData = `M ${newPoints.map((p) => `${p.x} ${p.y}`).join(" L ")}`;
        path.setAttribute("d", pathData);
      }

      requestAnimationFrame(anim);
    };

    const resize = () => {
      const ww = window.innerWidth;
      const wh = window.innerHeight;

      svg.style.width = `${ww}px`;
      svg.style.height = `${wh}px`;
      svg.setAttribute("viewBox", `0 0 ${ww} ${wh}`);
    };

    document.addEventListener("mousemove", move);
    window.addEventListener("resize", resize);

    anim();
    resize();

    return () => {
      document.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <svg className="trail" ref={svgRef}>
      <path d="" />
    </svg>
  );
};

export default MouseAnimation;
