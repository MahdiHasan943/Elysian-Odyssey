"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import Description from "./reusable/Description";

export default function PieChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "pie",
        data: {
          labels: ["John", "Jane", "Doe", "Emily", "Jack", "David", "Ruby"],
          datasets: [
            {
              label: "Info",
              data: [34, 64, 23, 45, 67, 24, 64],
              backgroundColor: [
                "#ff6384",
                "#ff9f40",
                "#ffd166",
                "#4bc0c0",
                "#36a2eb",
                "#9966ff",
                "#c9cbe1",
              ],
              borderColor: "#fff",
              borderWidth: 1,
            },
          ],
        },
        options: {
          // responsive: true,
          plugins: {
            legend: {
              labels: {
                color: "#fff",
              },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <div className="grid  py-10 grid-cols-1 lg:grid-cols-2">
      <Description
        className="max-w-[600px] py-20 md:py-0"
        text="The distribution of ELY tokens across these categories ensures a balanced and sustainable ecosystem that incentivizes participation, rewards contribution, and supports the long-term growth and success of the Elysian Odyssey game."
      />
      <div className="w-full max-w-[500px]">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
