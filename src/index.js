import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import Map from "./Components/Map";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// function App() {
//   const [content, setContent] = useState("");
//   return (
//     <div>
//       <Map setTooltipContent={setContent} />
//       <ReactTooltip>{content}</ReactTooltip>
//     </div>
//   );
// }

class App extends Component {
  state = {
    country: "",
    confirmed: null,
    newConfirmed: null,
    deaths: null,
    newDeaths: null,
    recovered: null,
    newRecovered: null,
    date: "",
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
      <div>
        <Map setTooltipContent={this.setTooltipContent} />
        {this.state.country == "" ? (
          ""
        ) : (
          <ReactTooltip>
            <p>Country: {this.state.country}</p>
            <p>
              Confirmed cases: {this.state.confirmed}
              <span></span> New cases: {this.state.newConfirmed}
            </p>

            <p>
              Death total: {this.state.deaths} <span></span> New deaths:{" "}
              {this.state.newDeaths}
            </p>
            <p>
              Recovered: {this.state.recovered} <span></span> New recovered:{" "}
              {this.state.newRecovered}{" "}
            </p>
            <p>Update time: {this.state.date}</p>
          </ReactTooltip>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
