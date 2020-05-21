import React from "react";
import Case from "./Case";
import Death from "./Death";
import Recovery from "./Recovery";
import historyDates from "../data/historyDates";
import countries from "../data/Countries";

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
    const view = this.state.mode === "case";
    const view2 = this.state.mode === "death";

    return (
      <>
        <div className="card bottom ">
          <div className="card-header">
            <div className="float-left">
              <button onClick={this.handleCase}>Case</button>
              <button onClick={this.handleDeath}>Death</button>
              <button onClick={this.handleRecovery}>Recovery</button>
            </div>
            <div className="float-right">
              <button>
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>
          <div className="card-body ">
            {view ? (
              <Case data={historyDates} cases={countries} />
            ) : view2 ? (
              <Death data={historyDates} deaths={countries} />
            ) : (
              <Recovery data={historyDates} recovered={countries} />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default barView;
