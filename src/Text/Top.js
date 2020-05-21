import React from "react";
import Case from "./Case";
import Death from "./Death";
import Active from "./Active";
import Recovered from "./Recovered";
import All from "../data/All";

export default class Top extends React.Component {
  state = {
    all: All,
  };
  render() {
    const { all } = this.state;

    return (
      <>
        <div className="d-none d-sm-block">
          <div className="row mt-3">
            <div className="col-md-6 col-12 ">
              <div className="row">
                <div className=" col-6">
                  <Case data={all} />
                </div>

                <div className=" col-6">
                  <Death data={all} />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12  ">
              <div className="row">
                <div className=" col-6">
                  <Active data={all} />
                </div>

                <div className=" col-6">
                  <Recovered data={all} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-none d-block d-sm-none ">

          <div className="row">
            <div className=" col-12 mt-3">
              <Case data={all} />
            </div>

            <div className=" col-12 mt-3">
              <Death data={all} />
            </div>
          </div>
          
          <div className="row mt-3">
            <div className=" col-12">
              <Active data={all} />
            </div>

            <div className=" col-12 mt-3">
              <Recovered data={all} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
