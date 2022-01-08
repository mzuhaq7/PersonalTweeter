import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Try from "./Try";

console.log("Zain: " + React.version);

ReactDOM.render(
  <React.Fragment>
    <App/>
    {/* <Try/> */}
  </React.Fragment>,
  document.getElementById('root')
);

