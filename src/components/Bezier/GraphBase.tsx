import { useRef, useState } from "react";
import "./graph.css";
import { GraphPoint } from "./GraphPoint";
import { errorToast } from "../../utils/toast";
import { GraphMarker } from "./GraphMarker";
import { GraphLine } from "./GraphLine";

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

// TODO rerender graph (based on new boundingClientRect) when screen dimensions change

export const GraphBase = () => {
  const [isAddingPoint, setIsAddingPoint] = useState(false);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const graphPlaneRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const handleButtonClick = () => setIsAddingPoint(true);

  const handleAddPoint: React.MouseEventHandler<HTMLDivElement> = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isAddingPoint) return;
    if (!graphPlaneRef?.current) {
      errorToast("Error with rendering graph, please reload.");
      return;
    }

    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
    setIsAddingPoint(false);
  };

  return (
    <>
      <div className="graph-info-container">
        <button onClick={handleButtonClick}>Add new point</button>
      </div>
      <div
        className="graph-base"
        id="graph-base"
        onClick={handleAddPoint}
        ref={graphPlaneRef}
      >
        {coordinates && graphPlaneRef?.current && (
          <>
            <GraphPoint
              coordinates={coordinates}
              setCoordinates={setCoordinates}
            />
            <GraphMarker
              pointCoordinates={coordinates}
              domrect={graphPlaneRef.current.getBoundingClientRect()}
            />
            <GraphLine
              pointCoordinates={coordinates}
              domrect={graphPlaneRef.current.getBoundingClientRect()}
            />
          </>
        )}
      </div>
    </>
  );
};
