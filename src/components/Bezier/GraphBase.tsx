import { useState } from "react";
import "./graph.css";
import { GraphPoint } from "./GraphPoint";
import { errorToast } from "../../utils/toast";
import { GraphMarker } from "./GraphMarker";

export type Coordinates = {
  x: number;
  y: number;
};

// have a "create point" button that will add to the array of points
// instead of just moving the one point that already exists

// create an array of points
// the points will always start at the bottom left and bottom right of the graph boundary
// (to represent t=0 t=1)

// draw lines that connect these points.
// will have to use some sort of bezier transform.

export const GraphBase = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const graphPlane = document.getElementById("graph-base");
  const graphBaseDomrect = graphPlane?.getBoundingClientRect();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!graphBaseDomrect) {
      errorToast("Error with rending graph, please reload.");
      return;
    }

    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <>
      <p>
        x:{coordinates?.x} y:{coordinates?.y}
      </p>
      <div className="graph-base" id="graph-base" onClick={handleClick}>
        {coordinates && graphBaseDomrect && (
          <>
            <GraphPoint
              coordinates={coordinates}
              setCoordinates={setCoordinates}
            />
            <GraphMarker
              pointCoordinates={coordinates}
              domrect={graphBaseDomrect}
            />
          </>
        )}
      </div>
    </>
  );
};
