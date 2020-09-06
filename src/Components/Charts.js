import React from "react";
import { Line } from "react-chartjs-2";

const Charts = ({ countryData, name, color }) => {
  const data = {
    labels: countryData.map((date) => date.date),

    datasets: [
      {
        label: name,
        fill: false,
        lineTension: 0.1,
        borderColor: color,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: color,
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: countryData.map((active) => active.property),
      },
    ],
  };
  return (
    <div className="chart-conteiner">
      <Line data={data} />
    </div>
  );
};

export default Charts;
