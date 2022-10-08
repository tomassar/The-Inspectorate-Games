import React from "react";
// import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";
import Transition from "../Transition";

const Chart = () => {
  const data = [
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 2 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 6 },
  ];
  return (
    <Transition>
      <div>
        <XYPlot height={300} width={350}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            color={null}
            data={data}
            fill="style"
            opacity={0.52}
            stroke="rgba(86,137,141,1)"
            style={{}}
          />
        </XYPlot>
      </div>
    </Transition>
  );
};

export default Chart;
