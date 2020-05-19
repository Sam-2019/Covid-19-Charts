import React from "react";

export default class Recovered extends React.Component {
  state = {
    data: this.props.data,
  };

  render() {
    const { data } = this.state;
    const cases = data[0].cases;
    const recovery = data[0].recovered;

    function rate(a, b) {
      return (b / a) * 100;
    }

    const recoveryRate = rate(cases, recovery).toFixed(2);
    return (
      <>
        <div className=" bottom shadow ">
          <div className="cardheader">
            Recovered
            <div className="float-right">
              <span>
                <i className="fas fa-info-circle"></i>
              </span>
            </div>
          </div>
          <div className="cardbody">
            <div className="cardtitle">
              {Intl.NumberFormat().format(recovery)}
              <span className="cardtitle2 float-right">{recoveryRate}%</span>
            </div>
     
            <hr />

            <span className="cardtitle3">
              Today: {this.props.data[0].todayCases}{" "}
              <span className="output">
                <span className="pChange">5%</span>
                <span>
                  <i className="fas fa-caret-down"></i>
                </span>
              </span>
            </span>
          </div>
        </div>
      </>
    );
  }
}
