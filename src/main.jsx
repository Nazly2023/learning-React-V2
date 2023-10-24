import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./HelloWorldApp";
// import { FirstApp } from "./FirstApp";
import "./style.css";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App />
    <FirstApp
      // title="Hi! I am Nazly Zambrano Hendez"
      subtitle="I am engineer agricultural"
      age={30}
    /> */}
    <CounterApp value={0} />
  </React.StrictMode>
);
