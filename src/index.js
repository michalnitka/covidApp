import React, { Component } from "react";
import ReactDOM from "react-dom";
import Map from "./Components/Map";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Tooltip from "./Components/ReactTooltip";
import Chart from "./Components/Charts";
import Input from "./Components/Input";

class App extends Component {
  state = {
    countries: [],
    country: "",
    confirmed: null,
    newConfirmed: null,
    deaths: null,
    newDeaths: null,
    recovered: null,
    newRecovered: null,
    date: "",
  };
  setCountries = (countries) => {
    this.setState({
      countries,
    });
  };

  setTooltipContent = (
    country,
    confirmed,
    newConfirmed,
    deaths,
    newDeaths,
    recovered,
    newRecovered,
    date
  ) => {
    this.setState({
      country,
      confirmed,
      newConfirmed,
      deaths,
      newDeaths,
      recovered,
      newRecovered,
      date,
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="map">
          <Map
            setTooltipContent={this.setTooltipContent}
            setCountries={this.setCountries}
          />
          {this.state.country && <Tooltip data={this.state} />}
        </div>
        <div className="charts">
          <Input countries={this.state.countries} />
          <Chart />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.unregister();
