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
          labels: [
            "Reserved Fund",
            "Marketing & Advisor",
            "Team",
            "E-Sports",
            "Stacking Rewards",
            "Pre Seed",
            "Seed",
            "Private Round",
            "Public",
            "Liquidity",
            "Play to Earn",
          ],
          datasets: [
            {
              label: "Info",
              data: [10, 6.5, 12.0, 5.0, 7, 5, 11, 8.5, 2, 5, 28],
              backgroundColor: [
                "#264b68",
                "#1b334b",
                "#cc2b12",
                "#37262b",
                "#f4ce84",
                // "#9966ff",
                "#262327",
                "#151918",
                "#cb660f",
                "#81a3ba",
              ],
              borderColor: "#fff",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              labels: {
                color: "#fff",
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.label || "";
                  if (label) {
                    label += ": ";
                  }
                  const value = context.raw || 0;
                  label += value + "%";
                  return label;
                },
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
