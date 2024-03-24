import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import Description from "./reusable/Description";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark1", // "light1", "dark1", "dark2"
    title: {
      text: "Token distribution",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          { y: 10, label: "Reserved Fud" },
          { y: 5.0, label: "Pree Seed" },
          { y: 6.5, label: "Marketing & Advisor" },
          { y: 12, label: "Team" },
          { y: 8.5, label: "Private Round" },
          { y: 5.0, label: "E-Sports" },
          { y: 2.0, label: "Public" },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2  ">
      <Description
        className="max-w-[600px] py-20 md:py-0"
        text="The distribution of ELY tokens across these categories ensures a
balanced and sustainable ecosystem that incentivizes
participation, rewards contribution, and supports the long-term
growth and success of the Elysian Odyssey game."
      />
      <div className="h-[300px]   md:h-[400px]  max-w-[500px]">
        {" "}
        <CanvasJSChart options={options} />
      </div>

      {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
    </div>
  );
};

export default Chart;
