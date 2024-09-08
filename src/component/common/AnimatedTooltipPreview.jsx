"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    // name: "Dora",
    // designation: "The Explorer",
    image: "./images/toolTip1.svg",
  },
  {
    id: 2,
    // name: "Dora",
    // designation: "The Explorer",
    image: "./images/toolTip2.svg",
  },
  {
    id: 3,
    // name: "Dora",
    // designation: "The Explorer",
    image: "./images/toolTip3.svg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
