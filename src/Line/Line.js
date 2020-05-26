import React from "react";
import List from "./List";
import Spinner from "../Spinner";

export default class Line extends React.Component {
  render() {
    let content;
    let countriesData = Object.keys(this.props.countries).length;

    if (countriesData === 0) {
      content = (
        <>
          <Spinner />
        </>
      );
    } else if (countriesData > 0) {
      content = (
        <>
          <div className="cardheader">Country's Stats</div>
          <div className="bottom shadow">
            <div className="cardbody">
              <List countries={this.props.countries} />
            </div>
          </div>
        </>
      );
    }

    return <>{content}</>;
  }
}
