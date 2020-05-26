import React from "react";
import HistoryRecovery from "./HistoryRecovery";

export default class Recovered extends React.Component {
  render() {
    const recoveredOutput = this.props.allRecovered;

    return (
      <>
        <div className="cardheader ">Recovered</div>
        <div className=" bottom shadow ">
          <div className="cardbody">
            <div className="title text-center recovered">
              {Intl.NumberFormat().format(recoveredOutput)}
            </div>

            <div className=" mb-3">
            <HistoryRecovery historyRecovered={this.props.historyRecovered}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
