import React from "react";
import Case from "./Case";
import Death from "./Death";
import Recovered from "./Recovery";
import Spinner from "../Spinner";

export default class barView extends React.Component {
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

    let content;
    let lengthAll = Object.keys(this.props.all).length;

    if (lengthAll === 0) {
      content = (
        <>
          <Spinner />
        </>
      );
    } else if (lengthAll > 0) {
      content = (
        <>
          <div className="cardheader">
            <button className="bottomText" onClick={this.handleCase}>
              Case
            </button>
            <button className="bottomText" onClick={this.handleDeath}>
              Death
            </button>
            <button className="bottomText" onClick={this.handleRecovery}>
              Recovery
            </button>
          </div>

          <div className="bottom shadow ">
            <div className="cardbody mb-3">
              {view ? (
                <Case
                  allCases={this.props.all.todayCases}
                  historyCases={this.props.historyDate.cases}
                />
              ) : view2 ? (
                <Death
                  allDeaths={this.props.all.todayDeaths}
                  historyDeaths={this.props.historyDate.deaths}
                />
              ) : (
                <Recovered
                  historyRecovered={this.props.historyDate.recovered}
                />
              )}
            </div>
          </div>
        </>
      );
    }
    return <>{content}</>;
  }
}
