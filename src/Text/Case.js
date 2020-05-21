import React from "react";
import historyDates from "../data/historyDates";
import HistoryCase from "../Line/HistoryCase2";

export default class Case extends React.Component {
  render() {
    return (
      <>
        <div className=" bottom shadow ">
          <div className="cardheader">
            Cases
            <div className="float-right">
              <span>
                <i className="fas fa-info-circle"></i>
              </span>
            </div>
          </div>
          <div className="cardbody">
            <span></span>
            <div className="cardtitle">
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
