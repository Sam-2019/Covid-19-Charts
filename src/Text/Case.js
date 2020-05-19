import React from "react";

export default class Case extends React.Component {
  render() {
    return (
      <>
        <div className=" bottom shadow ">
          <div className="cardheader">
            Cases
            <div className="float-right">
              <span>
                <i className="fas fa-info-circle"></i>
              </span>
            </div>
          </div>
          <div className="cardbody">
            <span></span>
            <div className="cardtitle"> {Intl.NumberFormat().format(this.props.data[0].cases)}</div>
           

            <hr />
            <span className="cardtitle2">
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
