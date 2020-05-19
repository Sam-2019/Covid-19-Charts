import React from "react";
import Case from "./caseData";
import Death from "./deathData";
import continent from "../data/Continent";

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
    return (
      <>
        <div className="card bottom">
          <div className="card-header">
            Continents
            <div className="float-right">
              <button onClick={this.handleCase}>Case</button>
              <button onClick={this.handleDeath}>Death</button>
              <button>
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <div className="cardbody">
            {view ? <Case data={continent} /> : <Death data={continent} />}
          </div>
        </div>
      </>
    );
  }
}
