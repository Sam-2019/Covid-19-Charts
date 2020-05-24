import React from "react";
import List from "./List";

export default class Line extends React.Component {
  render() {
    return (
      <>
        <div className="bottom bg-dark">
          <div className="cardheader">Country's Stats</div>
          <div className="cardbody">
            <div className="row ">
              <div className="col-12">
                <List />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
