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
        <div className=" bottom shadow">
          <div className="cardheader">
            Continents
            <div className="float-right">
              <button  className='bottomText' onClick={this.handleCase}>Case</button>
              <button className='bottomText' onClick={this.handleDeath}>Death</button>
    
            </div>
          </div>
          <div className="cardbody m-4">
            {view ? <Case data={continent} /> : <Death data={continent} />}
          </div>
        </div>
      </>
    );
  }
}
