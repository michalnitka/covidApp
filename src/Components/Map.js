import React, { memo } from "react";

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function Map({ countries, setTooltipContent }) {
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
                    countries
                      .filter(
                        (countryName) => countryName.CountryCode === ISO_A2
                      )
                      .map((countryName) => {
                        return setTooltipContent(
                          countryName.Country,
                          countryName.TotalConfirmed,
                          countryName.NewConfirmed,
                          countryName.TotalDeaths,
                          countryName.NewDeaths,
                          countryName.TotalRecovered,
                          countryName.NewRecovered,
                          `${countryName.Date.substring(
                            0,
                            10
                          )} ${countryName.Date.substring(11, 16)}`
                        );
                      });
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
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

export default memo(Map);
