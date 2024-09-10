import React, { useState, useEffect } from "react";

const DotGrid = ({ children }) => {
  const [hoveredDot, setHoveredDot] = useState({ row: null, col: null });
  const [isHovered, setIsHovered] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Set the dot size
  const dotSize = 20;
  const proximityRadius = 18;

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate the number of rows and columns based on screen size and dot size
  const rows = Math.floor(screenSize.height / dotSize);
  const cols = Math.floor(screenSize.width / dotSize);

  // Create a grid of dots
  const grid = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push({ id: `${i}-${j}`, row: i, col: j });
    }
  }

  // Track the mouse movement to highlight the hovered dot
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const row = Math.floor(clientY / dotSize);
    const col = Math.floor(clientX / dotSize);
    setHoveredDot({ row, col });
  };

  // Function to check if a dot is within the proximity radius
  const isWithinProximity = (dotRow, dotCol) => {
    const { row: hoveredRow, col: hoveredCol } = hoveredDot;
    if (hoveredRow === null || hoveredCol === null) return false;
    return (
      Math.abs(dotRow - hoveredRow) <= proximityRadius &&
      Math.abs(dotCol - hoveredCol) <= proximityRadius
    );
  };

  return (
    <div
      className="grid-container w-full h-screen relative bg-[##eee8e2 ]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {grid.map((dot) => (
        <div
          key={dot.id}
          className={`dot w-[2px] h-[2px] bg-[#232323] rounded-full transition-opacity duration-300 ${
            isWithinProximity(dot.row, dot.col) && isHovered
              ? "opacity-100"
              : "opacity-0"
          }`}
          style={{
            position: "absolute",
            top: `${dot.row * dotSize}px`,
            left: `${dot.col * dotSize}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default DotGrid;
