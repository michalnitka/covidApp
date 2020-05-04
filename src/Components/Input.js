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
    countries: this.props.countries,
  };
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

  render() {
    return (
      <select name="countries" id="countrySelected">
        {this.state.countries &&
          this.state.countries.map((country) => {
            return (
              <option key={country.CountryCode} value={country.slug}>
                {country.Country}
              </option>
            );
          })}
      </select>
    );
  }
}

export default Input;
