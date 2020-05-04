import React from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = (props) => {
  const { data } = props;
  return (
    <ReactTooltip>
      <p>Country: {data.country}</p>
      <p>
        Confirmed cases: {data.confirmed}
        <span></span> New cases: {data.newConfirmed}
      </p>

      <p>
        Death total: {data.deaths} <span></span> New deaths: {data.newDeaths}
      </p>
      <p>
        Recovered: {data.recovered} <span></span> New recovered:{" "}
        {data.newRecovered}{" "}
      </p>
      <p>Update time: {data.date}</p>
    </ReactTooltip>
  );
};

export default Tooltip;
