import React from "react";
import HistoryDeath from "./HistoryDeath";

export default class Death extends React.Component {
  render() {
    const deathOutput = this.props.allDeaths;

    return (
      <>
        <div className="cardheader">Deaths</div>
        <div className=" bottom shadow ">
          <div className="cardbody">
            <div className="title text-center death">
              {Intl.NumberFormat().format(deathOutput)}
            </div>

            <div className=" mb-3">
            <HistoryDeath historyDeaths={this.props.historyDeaths} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
