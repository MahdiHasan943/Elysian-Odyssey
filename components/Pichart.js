"use client";
import { useEffect } from "react";
import { Chart } from "chart.js";
import Description from "./reusable/Description";

function Example() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Accepted", "Pending", "Rejected"],
        datasets: [
          {
            label: "Data",
            data: [100, 100, 100], // Your data here
            backgroundColor: [
              "rgba(60, 186, 159, 0.5)",
              "rgba(255, 165, 0, 0.5)",
              "rgba(196, 88, 80, 0.5)",
            ],
            borderColor: [
              "rgb(60, 186, 159)",
              "rgb(255, 165, 0)",
              "rgb(196, 88, 80)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Category",
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Value",
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Hide legend
          },
        },
      },
    });
  }, []);

  return (
    <>
      {/* Bar chart */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <Description
          className="max-w-[600px] py-20 md:py-0"
          text="The distribution of ELY tokens across these categories ensures a balanced and sustainable ecosystem that incentivizes participation, rewards contribution, and supports the long-term growth and success of the Elysian Odyssey game."
        />
        <div className="flex mx-auto my-auto">
          <div className="rounded-xl ml-[-30px] w-full h-fit my-auto shadow-xl pb-2">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
      {/* Additional Information */}
      <div className="mx-auto mt-4 text-center">
        <p className="text-lg font-semibold">Additional Information:</p>
        <ul className="list-disc">
          <li>Reserved Fund: 10%</li>
          <li>Sports: 5.5%</li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </>
  );
}

export default Example;
