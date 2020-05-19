import React from "react";

export default class Death extends React.Component {
  state = {
    data: this.props.data,
  };

  render() {
    const { data } = this.state;
    const cases = data[0].cases;
    const death = data[0].deaths;

    function rate(a, b) {
      return (b / a) * 100;
    }

    const deathRate = rate(cases, death).toFixed(2);
    return (
      <>
        <div className="bottom shadow ">
          <div className="cardheader">
            Deaths
            <div className="float-right">
              <span>
                <i className="fas fa-info-circle"></i>
              </span>
            </div>
          </div>
          <div className="cardbody">
            <div className="cardtitle">
               {Intl.NumberFormat().format(death)}
              <span className="cardtitle2 float-right">{deathRate}%</span>
            </div>
        
            <hr />
            <span className="cardtitle3">
              Today: {this.props.data[0].todayDeaths}{" "}
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
