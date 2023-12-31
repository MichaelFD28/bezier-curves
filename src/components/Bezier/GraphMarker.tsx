import React from "react";
import { Coordinates } from "./GraphBase";

type Props = {
  pointCoordinates: Coordinates;
  domrect: DOMRect;
};

// every graph marker will be tied to a point on the graph.
export const GraphMarker: React.FC<Props> = ({ pointCoordinates, domrect }) => {
  const markerCoordinates = (axis: "x" | "y"): Coordinates =>
    axis === "x"
      ? {
          x: pointCoordinates.x,
          y: domrect.bottom,
        }
      : {
          x: domrect.left,
          y: pointCoordinates.y,
        };

  return (
    <>
      <div
        className={`graph-marker-x`}
        style={{
          // markers remove the diff from the radius of the graph point
          // and shift so they intersect the axes at their middle
          left: `${markerCoordinates("x").x - 4}px`,
          top: `${markerCoordinates("x").y - 8}px`,
        }}
      />
      <div
        className={`graph-marker-y`}
        style={{
          left: `${markerCoordinates("y").x - 8}px`,
          top: `${markerCoordinates("y").y - 4}px`,
        }}
      />
    </>
  );
};
