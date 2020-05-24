import React from "react";
import Case from "./Case";
import Death from "./Death";
import Recovered from "./Recovery";
import historyDates from "../data/historyDates";
import All from "../data/All";

class barView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "case",
    };

    this.handleCase = this.handleCase.bind(this);
    this.handleDeath = this.handleDeath.bind(this);
    this.handleRecovery = this.handleRecovery.bind(this);
  }

  handleCase() {
    this.setState({ mode: "case" });
  }

  handleDeath() {
    this.setState({ mode: "death" });
  }

  handleRecovery() {
    this.setState({ mode: "recovery" });
  }

  render() {
    const date = new Date();
    const k = date.toDateString();
    const view = this.state.mode === "case";
    const view2 = this.state.mode === "death";

    return (
      <>
        <div className="bottom shadow ">
          <div className="cardheader">
            <span className="float-left text-primary">
              <button className="bottomText" onClick={this.handleCase}>
                Case
              </button>
              <button className="bottomText" onClick={this.handleDeath}>
                Death
              </button>
              <button className="bottomText" onClick={this.handleRecovery}>
                Recovery
              </button>
            </span>
            <span className="float-right">{k}</span>
          </div>
          <div className="cardbody p-3">
            {view ? (
              <Case data={historyDates} today={All} />
            ) : view2 ? (
              <Death data={historyDates} today={All} />
            ) : (
              <Recovered data={historyDates}/>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default barView;
