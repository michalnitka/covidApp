import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Charts extends Component {
  state = {};

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const greaterThenZero = this.props.data.filter(
        (country) => country.Active > 0
      );

      this.setState({
        data: {
          labels: greaterThenZero.map((date) => {
            let strDate = date.Date;
            return strDate.substring(0, 10);
          }),
          datasets: [
            {
              label: "Active cases",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: greaterThenZero.map((active) => active.Active),
              // backgroundColor: "rgba(75,192,192,0.4)",
            },
          ],
        },
      });
    }
  }
  render() {
    return (
      <>
        <Line data={this.state.data} />
      </>
    );
  }
}

export default Charts;
