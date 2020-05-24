import React from "react";
import { Line } from "react-chartjs-2";

const Charts = (props) => {
  const data = {
    labels: props.data.map((date) => date.date),

    datasets: [
      {
        label: props.name,
        fill: false,
        lineTension: 0.1,
        borderColor: props.color,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: props.color,
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: props.color,
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: props.data.map((active) => active.property),
      },
    ],
  };
  return <Line data={data} />;
};

export default Charts;
