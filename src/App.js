import React, { Component } from "react";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import Chart from "./Chart";

import "bootstrap/dist/css/bootstrap.css";
import "./css/css.css";
import "./css/new.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <>
        <div className="container">
          <Chart />
        </div>
      </>
      </Provider>
    );
  }
}

export default App;
