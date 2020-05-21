import React from "react";

export default class Active extends React.Component {
  state = {
    data: this.props.data,
  };

  render() {
    const { data } = this.state;
    const cases = data[0].cases;
    const active = data[0].active;

    function rate(a, b) {
      return (b / a) * 100;
    }

    const activeRate = rate(cases, active).toFixed(2);

    return (
      <>
        <div className=" bottom shadow ">
          <div className="cardheader">
            Active
            <div className="float-right">
              <span>
                <i className="fas fa-info-circle"></i>
              </span>
            </div>
          </div>
          <div className="cardbody">
            <div className="cardtitle ">
              {" "}
              {Intl.NumberFormat().format(active)}
              <span className="cardtitle2 float-right">{activeRate}%</span>
            </div>

    
          </div>
        </div>
      </>
    );
  }
}
