import React from "react";
import Case from "./Case";
import Death from "./Death";
import Recovered from "./Recovered";
import Spinner from "../Spinner";
import All from "../data/All";

export default class Top extends React.Component {
  state = {
    all: All || {},
  };

  componentDidMount() {
    this.getData();
  }
  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    fetch("https://corona.lmao.ninja/v2/all")
      .then((response) => response.json())
      .then((all) => {
        this.setState({ all });
        this.intervalID = setTimeout(this.getData.bind(this), 5000);
      });
  };
  render() {
    const { all } = this.state;

    let content;
    let lengthCases = Object.keys(all).length;

    if (lengthCases === 0) {
      content = <Spinner />;
    } else if (lengthCases > 0) {
      content = (
        <>
          <div className="d-none d-sm-block">
            <div className="row mt-3">
              <div className=" col-4">
                <Case data={all} />
              </div>

              <div className=" col-4">
                <Death data={all} />
              </div>

              <div className=" col-4">
                <Recovered data={all} />
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

              <div className=" col-12 mt-3">
                <Recovered data={all} />
              </div>
            </div>
          </div>
        </>
      );
    }

    return <>{content}</>;
  }
}
