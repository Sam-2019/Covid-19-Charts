import React from "react";
import Top from "./Text/Top";
import Bar from "./Bar/Bar";
import Line from "./Line/Line";
import Pie from "./Pie/Pie";
import Spin from "./Spin";

import "./css/chart.css";

export default class Charts extends React.Component {
  intervalID;
  state = {
    All: {},
    HistoryDates: {},
    Countries: {},
    Continents: {},
  };
  componentDidMount() {
    this.getAll();
    this.getHistoryDates();
    this.getCountries();
    this.getContinents();
  }
  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getAll = () => {
    fetch("https://corona.lmao.ninja/v2/all")
      .then((response) => response.json())
      .then((All) => {
        this.setState({ All });
        this.intervalID = setTimeout(this.getAll.bind(this), 5000);
      });
  };

  getHistoryDates = () => {
    fetch("https://corona.lmao.ninja/v2/historical/all")
      .then((response) => response.json())
      .then((HistoryDates) => {
        this.setState({ HistoryDates });
        this.intervalID = setTimeout(this.getHistoryDates.bind(this), 5000);
      });
  };

  getCountries = () => {
    fetch("https://corona.lmao.ninja/v2/countries")
      .then((response) => response.json())
      .then((Countries) => {
        this.setState({ Countries });
        this.intervalID = setTimeout(this.getCountries.bind(this), 5000);
      });
  };

  getContinents = () => {
    fetch("https://disease.sh/v2/continents")
      .then((response) => response.json())
      .then((Continents) => {
        this.setState({ Continents });
        this.intervalID = setTimeout(this.getContinents.bind(this), 5000);
      });
  };

  render() {
    const { HistoryDates, All, Continents, Countries } = this.state;

    let content;
    let historydate = Object.keys(HistoryDates).length;

    if (historydate === 0) {
      content = (
        <>
          <Spin />
        </>
      );
    } else if (historydate > 0) {
      content = (
        <>
          <div className="mb-3">
            <Top all={All} historyDate={HistoryDates} />

            <div className="mt-3 mb-3">
              <Bar all={All} historyDate={HistoryDates} />
            </div>

            <div className="row mt-3">
              <div className="col-md-6 mb-3">
                <Line countries={Countries} />
              </div>

              <div className="col-md-6">
                <Pie continents={Continents} />
              </div>
            </div>
          </div>
        </>
      );
    }

    return <>{content}</>;
  }
}
