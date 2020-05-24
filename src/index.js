import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

const Index = () => {
  return <App />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
