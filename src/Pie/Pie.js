import React from "react";
import Case from "./caseData";
import Death from "./deathData";
import Spinner from "../Spinner";


export default class Pie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "case",
    };

    this.handleCase = this.handleCase.bind(this);
    this.handleDeath = this.handleDeath.bind(this);
  }

  handleCase() {
    this.setState({ mode: "case" });
  }

  handleDeath() {
    this.setState({ mode: "death" });
  }
  render() {
    const view = this.state.mode === "case";

    let content;
    let continentData = Object.keys(this.props.continents).length;
    if (continentData === 0) {
      content = (
        <>
          <Spinner />
        </>
      );
    } else if (continentData > 0) {
      content = (
        <>
          <div className="cardheader">
            Continents
            <div className="float-right">
              <button className="bottomText" onClick={this.handleCase}>
                Case
              </button>
              <button className="bottomText" onClick={this.handleDeath}>
                Death
              </button>
            </div>
          </div>
          <div className="bottom  shadow">
            <div className="cardbody pb-3">
              {view ? (
                <Case continent={this.props.continents} />
              ) : (
                <Death continent={this.props.continents} />
              )}
            </div>
          </div>
        </>
      );
    }

    return <>{content}</>;
  }
}
