import { useState } from "react";
import "./graph.css";
import { GraphPoint } from "./GraphPoint";

export type Coordinates = {
  x: number;
  y: number;
};

// create an array of points
// the points will always start at the bottom left and bottom right of the graph boundary
// (to represent t=0 t=1)

// draw lines that connect these points.
// will have to use some sort of bezier transform.

export const GraphBase = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setCoordinates({
      x: e.pageX,
      y: e.pageY,
    });
  };

  return (
    <>
      <p>
        x:{coordinates?.x} y:{coordinates?.y}
      </p>
      <div className="graph-base" id="graph-base" onClick={handleClick}>
        {coordinates && (
          <GraphPoint
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          />
        )}
      </div>
    </>
  );
};
