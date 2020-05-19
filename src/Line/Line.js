import React from "react";
import HistoryCase from "./HistoryCase";
import HistoryDeath from "./HistoryDeath";
import HistoryRecovery from "./HistoryRecovery";
import historyDates from "../data/historyDates";

export default class Line extends React.Component {
  render() {
    return (
      <>
        <div className="card bottom">
          <div className="card-header">
            1651651
            <div className="float-right">
              <button>
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <span className="category"> Cases</span>
                <div>
                  <span className="value">30,000</span>
                  <div className="float-right output">
                    <span className="pChange">5%</span>
                    <span>
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </div>
                </div>
                <HistoryCase data={historyDates}/>
              </div>
              <div className="col-4">
                <span className="category"> Deaths</span>
                <div>
                  <span className="value">30,000</span>
                  <div className="float-right output">
                    <span className="pChange">5%</span>

                    <span>
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </div>
                </div>
                <HistoryDeath data={historyDates} />
              </div>

              <div className="col-4">
                <span className="category"> Recovery</span>

                <div>
                  <span className="value">30,000</span>
                  <span className="float-right output">
                    <span className="pChange">5%</span>
                    <span>
                      <i className="fas fa-caret-down"></i>
                    </span>
                  </span>
                </div>
                <HistoryRecovery data={historyDates}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
