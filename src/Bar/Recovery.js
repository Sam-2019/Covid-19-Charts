import React from "react";
import { ResponsiveBar } from "@nivo/bar";

class recoveryBar extends React.Component {
  render() {
    const historyDates = this.props.data;

    let chartData = [];

    const recovered = historyDates[0].recovered;
    for (let key in recovered) {
      chartData.push({
        date: key,
        recovery: recovered[key],
      });
    }

    var dataRecovery = [];
    for (let key in recovered) {
      dataRecovery.push(recovered[key]);
    }

    var date = [];
    for (let key in recovered) {
      date.push(key);
    }

    var newData = [];
    var numbers2 = [];
    var preValue;
    dataRecovery.map(myFunction);

    function myFunction(value0) {
      if (preValue) {
        numbers2.push(value0 - preValue);
      }
      preValue = value0;
    }

    dataRecovery.shift();

    for (let key in dataRecovery) {
      newData.push({
        date: date[key],
        daily: numbers2[key],
      });
    }

    const yesterdayRecovery = numbers2[28];
    const daybeforeyeaterdayRecovery = numbers2[27];
    function compare(a, b) {
      return ((b / a - 1) * 100).toFixed(2);
    }
    const rate = compare(daybeforeyeaterdayRecovery, yesterdayRecovery);

    let rateRewrite;
    if (rate > 0) {
      rateRewrite = rate;
    } else rateRewrite = rate * -1;

    return (
      <>
        <div className="row">
          <div className="col-md-9 col-12">
            <div className="chartBar">
              <ResponsiveBar
                data={newData}
                keys={["daily"]}
                indexBy="date"
                margin={{ top: 5, right: 0, bottom: 7, left: 41 }}
                padding={0.3}
                colors={{ scheme: "paired" }}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={{
                  tickSize: 0,
                  tickPadding: 5,
                  tickRotation: 0,
                  legendPosition: "middle",
                  legendOffset: -40,
                }}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
              />
            </div>
          </div>
          <div className="col-md-3 col-12 text-center ">
            <div className="top-head p-1 ">Yesterday's Recovery</div>

            <div className="kane   shadow  rounded">
              <div className="value recovered">
                {Intl.NumberFormat().format(yesterdayRecovery)}
              </div>
              <div className="mb-3 ">
                <span className=" output slideIn">
                  {rate > 0 ? (
                    <span className="green">
                      <span>
                        <i className="fas fa-caret-up"></i>
                      </span>{" "}
                      {rateRewrite}%
                    </span>
                  ) : (
                    <span className="red">
                      <span>
                        <i className="fas fa-caret-down"></i>
                      </span>{" "}
                      {rateRewrite}%
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default recoveryBar;
