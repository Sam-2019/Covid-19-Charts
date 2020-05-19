import React, { Component } from "react";
import Chart from "./Chart";
import Sort from "./sort";

import "bootstrap/dist/css/bootstrap.css";
import "./css/css.css";
import "./css/new.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Chart />
        </div>
      </>
    );
  }
}

export default App;
