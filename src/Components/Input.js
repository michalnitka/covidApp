import React, { Component } from "react";
import Charts from "./Charts";

let requestOptions = {
  method: "GET",
  redirect: "follow",
};
class Input extends Component {
  state = {
    selectValue: "afghanistan",
    dataActive: [],
    dataDeaths: [],
  };
  handleChange = (e) => {
    this.setState({
      selectValue: e.target.value,
    });
  };
  getData = () => {
    fetch(
      `https://api.covid19api.com/total/country/${this.state.selectValue}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          dataActive: data
            .filter((country) => country.Active > 0)
            .map((country) => ({
              property: country.Active,
              date: country.Date.substring(0, 10),
            })),
          dataDeaths: data
            .filter((country) => country.Deaths > 0)
            .map((country) => ({
              property: country.Deaths,
              date: country.Date.substring(0, 10),
            })),
        })
      )
      .catch((error) => console.log("error", error));
  };

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectValue !== prevState.selectValue) {
      this.getData();
    }
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
        {this.state.selectValue && (
          <>
            {" "}
            <Charts
              countryData={this.state.dataActive}
              name="Active cases"
              color="rgba(1, 167, 255, 1)"
            />
            <Charts
              countryData={this.state.dataDeaths}
              name="Deaths"
              color="rgba(255, 37, 37, 1)"
            />
          </>
        )}
      </>
    );
  }
}

export default Input;
