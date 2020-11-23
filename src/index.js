import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.scss";
require.context("./images");

let destination = document.getElementById("root");


ReactDOM.render(  
  <App/>,   
  destination
);


if (module.hot) {
  module.hot.accept(
    console.log("Module update accepted!") // Intentionally leaved as confirmation that hot module replacement works.
  );
};
