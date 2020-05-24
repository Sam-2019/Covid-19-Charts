import React from "react";
import historyDates from "../data/historyDates";
import HistoryDeath from "./HistoryDeath";

export default class Death extends React.Component {
  render() {
  
    return (
      <>
            <div className=" bottom shadow ">
          <div className="cardheader">
            Deaths
          </div>
          <div className="cardbody">
            <div className="title text-center death">
              {Intl.NumberFormat().format(this.props.data[0].deaths)}
   
            </div>

            <div className=" mb-3">
              <HistoryDeath data={historyDates} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
