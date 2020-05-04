import React, { Component } from "react";

// class Input extends Component {
//   state = {
//     countries: [],
//   };

//   render() {
//     // const sortedCountries = [];
//     // this.state.countries.map((option) => {
//     //   sortedCountries.sort().push(option.Country);
//     // });

//     return (
//       <select name="countries" id="countrySelecet">
//         {/* {this.createOption()} */}
//         {this.state.countries.map((option, key) => {
//           return (
//             <option key={key} value={option.slug}>
//               {option.Country}
//             </option>
//           );
//         })}
//       </select>
//     );
//   }
// }
class Input extends Component {
  state = {
    countries: [],
  };
  //   componentDidMount() {
  //     const requestOptions = {
  //       method: "GET",
  //       redirect: "follow",
  //     };

  //     fetch("https://api.covid19api.com/countries", requestOptions)
  //       .then((result) => result.json())
  //       .then((data) => {
  //         data.forEach((country) => this.state.countries.push(country));
  //       })
  //       .catch((error) => console.log("error", error));
  //   }

  //   componentDidUpdate() {
  //     if (this.state.countries.length < 2) {
  //       this.setState({
  //         countries: this.props,
  //       });
  //     }
  //   }
  //   createOptions() {
  //     this.state.countries.map((country, key) => {
  //       return (
  //         <option key={key} value={country.slug}>
  //           {country.Country}
  //         </option>
  //       );
  //     });
  //   }

  componentDidMount() {
    this.props.forEach((country) => {
      this.state.countries.push(country);
    });
  }

  render() {
    console.log(this.state.countries);

    return (
      <select name="countries" id="countrySelected">
        {this.state.countries.forEach((option) => {
          return <option value={option.slug}>{option.Country}</option>;
        })}
      </select>
    );
  }
}

export default Input;
