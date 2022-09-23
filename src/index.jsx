import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import facebookIcon from "./Facebook.png";
import Test from "./Test";

function App() {
  return (
    <div>
      <Test />
      <h1>Hello World!</h1>
      <img src={facebookIcon} alt="Facebook" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
