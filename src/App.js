import React, { Component } from "react";
import Map from "./Components/Map";
import "./App.css";
import Tooltip from "./Components/ReactTooltip";
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
    selectValue: "",
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

  componentDidMount() {
    fetch("https://api.covid19api.com/summary", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ countries: data.Countries });
      })

      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="map">
          <Map
            setTooltipContent={this.setTooltipContent}
            countries={this.state.countries}
          />
          {this.state.country && <Tooltip data={this.state} />}
        </div>
        <div className="charts">
          <Input countries={this.state.countries} />
        </div>
      </div>
    );
  }
}

export default App;
