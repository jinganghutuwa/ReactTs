import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/common/index.scss";
import ReactRouter from "./router";

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
