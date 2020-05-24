import React from "react";
import historyDates from "../data/historyDates";
import HistoryCase from "./HistoryCase";

export default class Case extends React.Component {
  render() {
    return (
      <>
        <div className=" bottom shadow ">
          <div className="cardheader">Cases</div>
          <div className="cardbody">
            <div className="title text-center case">
              {Intl.NumberFormat().format(this.props.data[0].cases)}
            </div>

            <div className=" mb-3">
              <HistoryCase data={historyDates} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
