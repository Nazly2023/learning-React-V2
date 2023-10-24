import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FirstApp subtitle="I am engineer agricultural" age={30} />
  </React.StrictMode>
);
