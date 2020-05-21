import React from "react";
import HistoryCase from "./HistoryCase";
import HistoryDeath from "./HistoryDeath";
import historyDates from "../data/historyDates";
import All from "../data/All";
import countries from "../data/Countries";
import List from '../Bar/List'

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
              <div className="col-6">
                <span className="category"> Cases</span>
                <HistoryCase data={historyDates} todayCase={All} />
              </div>

              <div className="col-6">
                <span className="category"> Deaths</span>

                <HistoryDeath data={historyDates} todayDeath={All} />
              </div>

              <div className="col-12">
      <List  cases={countries}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
