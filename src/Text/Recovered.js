import React from "react";
import HistoryRecovery from "./HistoryRecovery";
import historyDates from "../data/historyDates";

export default class Recovered extends React.Component {
  render() {

    return (
      <>
        <div className=" bottom shadow ">
          <div className="cardheader ">
            Recovered
          </div>
          <div className="cardbody">
            <div className="title text-center recovered">
              {Intl.NumberFormat().format(this.props.data[0].recovered)}
            </div>

            <div className=" mb-3">
              <HistoryRecovery data={historyDates} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
