import React, { memo } from "react";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

class Map extends React.Component {
  state = {
    countries: [],
  };
  componentDidMount() {
    fetch("https://api.covid19api.com/summary", {
      method: "GET",
      redirect: "follow",
      // headers: {
      //   "x-rapidapi-host": "covid-193.p.rapidapi.com",
      //   "x-rapidapi-key": "5f1ec83cbamsh630e60b9c99d261p1940f8jsnfaa35470985a",
      // },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // data.response.map((item) => {
        //   this.state.countries.push(item.Countries);
        // });
        // this.state.countries.push(data.Countries.Country);
        data.Countries.forEach((country) => this.state.countries.push(country));
      })

      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { ISO_A2 } = geo.properties;
                      this.state.countries.forEach((countryName) => {
                        if (countryName.CountryCode === ISO_A2) {
                          this.props.setTooltipContent(
                            countryName.Country,
                            countryName.TotalConfirmed,
                            countryName.NewConfirmed,
                            countryName.TotalDeaths,
                            countryName.NewDeaths,
                            countryName.TotalRecovered,
                            countryName.NewRecovered,
                            countryName.Date
                          );
                        } else {
                          return;
                        }
                      });
                    }}
                    onMouseLeave={() => {
                      this.props.setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                        border: "black",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </>
    );
  }
}

export default memo(Map);
