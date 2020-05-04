import React, { Component } from "react";

class Input extends Component {
  state = {
    countries: this.props.countries,
    selectValue: "",
  };
  handleChange = (e) => {
    this.setState({
      selectValue: e.target.value,
    });
  };

  render() {
    return (
      <select
        value={this.state.selectValue}
        name="countries"
        id="countrySelected"
        onChange={this.handleChange}
      >
        {this.state.countries &&
          this.state.countries.map((country) => {
            return (
              <option key={country.CountryCode} value={country.Slug}>
                {country.Country}
              </option>
            );
          })}
      </select>
    );
  }
}

export default Input;
