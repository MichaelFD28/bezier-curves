import { useMemo } from "react";
import { Coordinates } from "./GraphBase";

type Props = {
  pointCoordinates: Coordinates;
  domrect: DOMRect;
};

export const GraphLine: React.FC<Props> = ({ domrect, pointCoordinates }) => {
  // graph plane width is 516px
  // maybe generate a bunch of points between the user's chosen points to fit this?

  // Every <polyline> consists of a comma-separated list of X and Y values, relative to the view-box.
  // This is how each point of the line is positioned within the SVG node.

  const coordinatesArray: Coordinates[] = useMemo(
    () => [
      {
        x: 0,
        y: 516,
      },
      // point coordinates will now be based on the view-box
      // need to calculate position relative to graph
      {
        x: pointCoordinates.x - domrect.left - 2,
        y: pointCoordinates.y - domrect.top + 2,
      },
      {
        x: 516,
        y: 516,
      },
    ],
    [pointCoordinates.x, pointCoordinates.y, domrect.left, domrect.top]
  );

  const polylineCoordinates: string = coordinatesArray.reduce((acc, curr) => {
    return acc + " " + `${curr.x},${curr.y}`;
  }, "");

  return (
    <svg x="0px" y="0px" viewBox="0 0 516 516" fill="none" stroke="#4f4e4a">
      <polyline points={polylineCoordinates} strokeWidth={"2"} />
    </svg>
  );
};
