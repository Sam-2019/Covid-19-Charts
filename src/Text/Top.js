import React from "react";
import Case from "./Case";
import Death from "./Death";
import Active from "./Active";
import Recovered from "./Recovered";
import All from "../data/All";
import historyDates from "../data/historyDates";

export default class Top extends React.Component {
  state = {
    all: All,
    historyDates: historyDates,
  };
  render() {
    const { all, historyDates } = this.state;
 
    return (
      <>
        <div className="row mt-3">
          <div className="col-md-3 col-6">
            <Case data={all} />
          </div>

          <div className="col-md-3 col-6">
            <Death data={all} />
          </div>

          <div className="col-md-3 col-6">
            <Active data={all} />
          </div>

          <div className="col-md-3 col-6">
            <Recovered data={all} />
          </div>
        </div>
      </>
    );
  }
}


