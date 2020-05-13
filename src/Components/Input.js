import React, { Component } from "react";
import Charts from "./Charts";

let requestOptions = {
  method: "GET",
  redirect: "follow",
};

class Input extends Component {
  state = {
    selectValue: "afghanistan",
    data: [],
  };
  handleChange = (e) => {
    this.setState({
      selectValue: e.target.value,
    });
  };
  getData = () =>
    fetch(
      `https://api.covid19api.com/total/country/${this.state.selectValue}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data,
        })
      )
      .catch((error) => console.log("error", error));

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate() {
    this.getData();
  }

  render() {
    return (
      <>
        <select
          value={this.state.selectValue}
          name="countries"
          id="countrySelected"
          onChange={this.handleChange}
        >
          {this.props.countries &&
            this.props.countries.map((country) => {
              return (
                <option key={country.CountryCode} value={country.Slug}>
                  {country.Country}
                </option>
              );
            })}
        </select>
        <Charts data={this.state.data} />
      </>
    );
  }
}

export default Input;
