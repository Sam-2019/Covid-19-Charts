import React from "react";
import Case from "./Case";
import Death from "./Death";
import Recovered from "./Recovered";
import Spinner from "../Spinner";

export default class Top extends React.Component {
  render() {
    let content;
    let HistoryDateAll = Object.keys(this.props.historyDate).length;

    if (HistoryDateAll === 0) {
      content = (
        <>
          <Spinner />
        </>
      );
    } else if (HistoryDateAll > 0) {
      content = (
        <>
          <div className="d-none d-sm-block">
            <div className="row mt-3">
              <div className=" col-4">
                <Case
                  allCases={this.props.all.cases}
                  historyCases={this.props.historyDate.cases}
                />
              </div>

              <div className=" col-4">
                <Death
                  allDeaths={this.props.all.deaths}
                  historyDeaths={this.props.historyDate.deaths}
                />
              </div>

              <div className=" col-4">
                <Recovered
                  allRecovered={this.props.all.recovered}
                  historyRecovered={this.props.historyDate.recovered}
                />
              </div>
            </div>
          </div>

          <div className="d-none d-block d-sm-none ">
            <div className="row">
              <div className=" col-12 mt-3">
                <Case
                  allCases={this.props.all.cases}
                  historyCases={this.props.historyDate.cases}
                />
              </div>

              <div className=" col-12 mt-3">
                <Death
                  allDeaths={this.props.all.deaths}
                  historyDeaths={this.props.historyDate.deaths}
                />
              </div>

              <div className=" col-12 mt-3">
                <Recovered
                  allRecovered={this.props.all.recovered}
                  historyRecovered={this.props.historyDate.recovered}
                />
              </div>
            </div>
          </div>
        </>
      );
    }

    return <>{content}</>;
  }
}
