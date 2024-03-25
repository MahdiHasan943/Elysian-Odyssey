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
        type: "doughnut",
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
                "#4f18be",
                "#03e9d8",
                "#f5089f",
                "#00d163",
                "#f45f59",
                "#346897",
                "#ffc7c7",
                "#617c8b",
                "#007777",
                "#d37ed4",
                "#a41d1a",
              ],
              borderColor: "#287bbe",
              borderWidth: 1, // Increase the border width to add spacing
              margin: 5,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: "right",
              labels: {
                color: "#fff", // Set label color to white
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
            doughnutGaps: {
              cutoutPercentage: 200, // Adjust the percentage to control the gap
            },
            datalabels: {
              color: "#fff",
              anchor: "end", // Position labels to the end (right side) of segments
              align: "end",
              formatter: (value, ctx) => {
                return value + "%";
              },
              font: {
                weight: "bold",
              },
            },
          },
          layout: {
            padding: {
              top: 20,
              bottom: 20,
              left: 20,
              right: 20,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);

  return (
    <div className="grid py-10 grid-cols-1  items-center lg:grid-cols-2">
      <Description
        className="max-w-[600px] py-20 md:py-0"
        text="The distribution of ELY tokens across these categories ensures a balanced and sustainable ecosystem that incentivizes participation, rewards contribution, and supports the long-term growth and success of the Elysian Odyssey game."
      />
      <div className="max-w-[600px] py-20 md:py-0">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
