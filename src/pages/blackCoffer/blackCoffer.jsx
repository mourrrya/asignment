import React from "react";

import { Radar } from "react-chartjs-2";
// import bcData from "../../blackCofferData.json";

export default function BlackCoffer() {
  let regionSA = [];
  // bcData.forEach((data) => {
  //   if (data.region.toLowerCase() === "south america") {
  //     console.log(data.region.toLowerCase());
  //     regionSA = [...regionSA, data];
  //   }
  // });
  let sum = 0;
  for (let i = 0; i < regionSA.length; i++) {
    const intensity = regionSA[i].intensity;
    console.log(intensity);
    if (!!intensity) {
      sum = parseInt(intensity) + parseInt(sum);
    }
  }
  const randomScalingFactor = () => {
    return Math.round(Math.random() * 100);
  };

  const data = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(220,220,220,0.2)",
        pointBackgroundColor: "rgba(220,220,220,1)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        metadata: [1, 2, 3, 4, 5, 6, 7],
      },
      {
        label: "Hidden dataset",
        hidden: true,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(151,187,205,0.2)",
        pointBackgroundColor: "rgba(151,187,205,1)",
        hoverPointBackgroundColor: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
      },
    ],
  };
  const options = {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Radar Chart",
    },
    scale: {
      reverse: false,
      gridLines: {
        color: [
          "black",
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "indigo",
          "violet",
        ],
      },
      ticks: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="">
      <Radar
        data={data}
        options={options}
        onElementsClick={(elem) => console.log(elem)}
      />
    </div>
  );
}
