import React, { useState } from "react";
import { Coordinates } from "./GraphBase";
import "./graph.css";

type Props = {
  coordinates: Coordinates;
  setCoordinates: (value: Coordinates) => void;
};

export const GraphPoint: React.FC<Props> = ({
  coordinates,
  setCoordinates,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const handleDragStart: React.DragEventHandler<HTMLDivElement> = () => {
    setIsDragging(true);
  };

  const handleDrag: React.DragEventHandler<HTMLDivElement> = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    // delay drag for trailing effect
    setTimeout(
      () =>
        setCoordinates({
          x: e.pageX,
          y: e.pageY,
        }),
      100
    );
  };

  const handleDragEnd: React.DragEventHandler<HTMLDivElement> = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    setTimeout(
      () =>
        setCoordinates({
          x: e.pageX,
          y: e.pageY,
        }),
      100
    );
    setIsDragging(false);
  };

  return (
    <div
      className={`graph-point ${isDragging && "dragging"}`}
      style={{
        left: `${coordinates.x - 8}px`,
        top: `${coordinates.y - 8}px`,
      }}
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    />
  );
};
