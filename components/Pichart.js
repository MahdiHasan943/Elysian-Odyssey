"use client";
import { useEffect } from "react";
import { Chart } from "chart.js";
import Description from "./reusable/Description";
function Example() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Accepted", "Pending", "Rejected"],
        datasets: [
          {
            data: [70, 10, 6],
            borderColor: ["#3cba9f", "#ffa500", "#c45850"],
            backgroundColor: [
              "rgb(60,186,159,0.1)",
              "rgb(255,165,0,0.1)",
              "rgb(196,88,80,0.1)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  }, []);
  return (
    <>
      {/* Pie chart */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2  ">
        <Description
          className="max-w-[600px] py-20 md:py-0"
          text="The distribution of ELY tokens across these categories ensures a
balanced and sustainable ecosystem that incentivizes
participation, rewards contribution, and supports the long-term
growth and success of the Elysian Odyssey game."
        />
        <div className="flex mx-auto my-auto">
          <div className=" rounded-xl  w-full h-fit my-auto  shadow-xl pb-2">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
export default Example;
