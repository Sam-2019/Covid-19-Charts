import React from "react";
import Top from "./Text/Top";
import Bar from "./Bar/Bar";
import Line from "./Line/Line";
import Pie from "./Pie/Pie";

import "./css/chart.css";

export default class Charts extends React.Component {
  render() {
    return (
      <>
        <div className="mb-3">
          <Top />

          <div className="mt-3 mb-3">
            <Bar />
          </div>

          <div className="row mt-3">
            <div className="col-md-6 mb-3">
              <Line />
            </div>

            <div className="col-md-6">
              <Pie />
            </div>
          </div>
        </div>
      </>
    );
  }
}
