
import React from "react";
import ReactDOM from "react-dom";
import "./variables.css";
import "./index.css";
import "./honeyaiVariables.css"
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { storyBank } from "./data/TestStories.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
