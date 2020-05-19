import React from "react";
import { ResponsivePie } from "@nivo/pie";
import historyDates from "./data/historyDates";
import continent from "./data/Continent";

import "./css/chart.css";

class Charts extends React.Component {
  state = {
    historyDates: historyDates,
    continent: continent,
    mode: 'view'
  };

  handleEdit() {
    this.setState({mode: 'edit'})
  }

  render() {
    const { historyDates, continent } = this.state;
    let casesData = [];
    let deathData = [];

    for (let key in continent) {
      casesData.push({
        id: continent[key].continent,
        label: continent[key].continent,
        value: continent[key].cases,
      });
    }

    for (let key in continent) {
      deathData.push({
        id: continent[key].continent,
        label: continent[key].continent,
        value: continent[key].deaths,
      });
    }

    console.log(casesData);
    console.log(deathData);

    const view = this.state.mode === 'view'

    return (
      <>
        <div>
          <div className="">
            <div className="row mt-3">
              <div className="col-3 col-md-3">
                <div className="card top">
                  <div className="card-body"></div>
                </div>
              </div>

              <div className="col-3 col-md-3">
                <div className="card top">
                  <div className="card-body"></div>
                </div>
              </div>

              <div className="col-3 col-md-3">
                <div className="card top">
                  <div className="card-body"></div>
                </div>
              </div>

              <div className="col-3 col-md-3">
                <div className="card">
                  <div className="card-body"></div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <div className="card">
                  <div className="card-body"></div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="row mt-3">
                <div className="col-6">
                  <div className="card bottom">
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card bottom">
                    <div className="card-body">
                      <a href="#1">Cases</a>
                      <a href="#1">Death</a>
                      <a href="#1">Critical</a>
                      <div className="chart">
                        <ResponsivePie
                          data={casesData}
                          margin={{ top: 0, right: 0, bottom: 0, left: -80 }}
                          innerRadius={0.7}
                          padAngle={2}
                          cornerRadius={0}
                          colors={{ scheme: "nivo" }}
                          borderWidth={0}
                          borderColor={{
                            from: "color",
                            modifiers: [["darker", 0.2]],
                          }}
                          enableRadialLabels={false}
                          radialLabelsSkipAngle={10}
                          radialLabelsTextXOffset={6}
                          radialLabelsTextColor="#333333"
                          radialLabelsLinkOffset={0}
                          radialLabelsLinkDiagonalLength={16}
                          radialLabelsLinkHorizontalLength={24}
                          radialLabelsLinkStrokeWidth={1}
                          radialLabelsLinkColor={{ from: "color" }}
                          slicesLabelsSkipAngle={10}
                          slicesLabelsTextColor="#333333"
                          animate={true}
                          motionStiffness={90}
                          motionDamping={15}
                          defs={[
                            {
                              id: "dots",
                              type: "patternDots",
                              background: "inherit",
                              color: "rgba(255, 255, 255, 0.3)",
                              size: 4,
                              padding: 1,
                              stagger: true,
                            },
                          ]}
                          legends={[
                            {
                              translateX: 50,
                              translateY: 0,
                              anchor: "right",
                              direction: "column",
                              itemWidth: 150,
                              itemHeight: 31,
                              itemTextColor: "#999",
                              symbolSize: 20,
                              symbolShape: "circle",
                              effects: [
                                {
                                  on: "hover",
                                  style: {
                                    itemTextColor: "#000",
                                  },
                                },
                              ],
                            },
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Charts;
