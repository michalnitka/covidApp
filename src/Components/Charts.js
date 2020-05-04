import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      data: [13, 20, 7, 15, 21],
      backgroundColor: "rgba(75,192,192,0.4)",
    },
  ],
};

class Chart extends Component {
  state = {};
  render() {
    return (
      <>
        <Line data={data} />
      </>
    );
  }
}

export default Chart;
