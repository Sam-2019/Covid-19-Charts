import React from "react";
import historyDates from "../data/historyDates";
import HistoryDeath from "../Line/HistoryDeath2";

export default class Death extends React.Component {
  state = {
    data: this.props.data,
  };

  render() {
    const { data } = this.state;
    const cases = data[0].cases;
    const death = data[0].deaths;

    function rate(a, b) {
      return (b / a) * 100;
    }

    const deathRate = rate(cases, death).toFixed(2);
    return (
      <>
        <div className="bottom shadow ">
          <div className="cardheader">
            Deaths
            <div className="float-right">
              <span>
                <i className="fas fa-info-circle"></i>
              </span>
            </div>
          </div>
          <div className="cardbody">
            <div className="cardtitle">
              {Intl.NumberFormat().format(death)}
              <span className="cardtitle2 float-right">{deathRate}%</span>
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
