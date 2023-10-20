import React from "react";
import { Coordinates } from "./GraphBase";
import "./graph.css";

export const GraphPoint: React.FC<Coordinates> = (coordinates) => {
  return (
    <div
      className="graph-point"
      style={{
        left: `${coordinates.x - 8}px`,
        top: `${coordinates.y - 8}px`,
        display: `${coordinates ? "block" : "hidden"}`,
      }}
    />
  );
};
