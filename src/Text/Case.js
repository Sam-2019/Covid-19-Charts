import React from "react";
import HistoryCase from "./HistoryCase";

export default class Case extends React.Component {
  render() {
    const caseOutput = this.props.allCases;

    return (
      <>
        <div className="cardheader">Cases</div>
        <div className=" bottom shadow ">
          <div className="cardbody mb-3">
            <div className="title text-center case">
              {Intl.NumberFormat().format(caseOutput)}
            </div>

            <HistoryCase historyCases={this.props.historyCases}/>
          </div>
        </div>
      </>
    );
  }
}
