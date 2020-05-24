import React from "react";
import { ResponsiveBar } from "@nivo/bar";

class caseBar extends React.Component {
  render() {
    const historyDates = this.props.data;

    let chartData = [];

    const cases = historyDates[0].cases;
    for (let key in cases) {
      chartData.push({
        date: key,
        case: cases[key],
      });
    }

    var dataCase = [];
    for (let key in cases) {
      dataCase.push(cases[key]);
    }

    var date = [];
    for (let key in cases) {
      date.push(key);
    }

    var newData = [];
    var numbers2 = [];
    var preValue;
    dataCase.map(myFunction);

    function myFunction(value0) {
      if (preValue) {
        numbers2.push(value0 - preValue);
      }
      preValue = value0;
    }

    dataCase.shift();

    for (let key in dataCase) {
      newData.push({
        date: date[key],
        daily: numbers2[key],
      });
    }

    const todayCase = this.props.today[0].todayCases;
    const yesterdayCase = numbers2[28];
    function compare(a, b) {
      return ((b / a - 1) * 100).toFixed(2);
    }
    const rate = compare(yesterdayCase, todayCase);

    let rateRewrite;
    if (rate > 0) {
      rateRewrite = rate;
    } else rateRewrite = rate * -1;

    return (
      <>

        <div className="row  ">
          <div className="col-md-9 col-12 ">
            <div className="chartBar ">
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
                labelTextColor={{
                  from: "color",
                  modifiers: [["darker", 1.6]],
                }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
              />
            </div>
          </div>
          <div className="col-md-3 col-12 text-center ">
          <div className="top-head p-1 ">Today's Cases</div>

            <div className="kane   shadow  rounded">
     
              <div className="value case">
                {Intl.NumberFormat().format(todayCase)}
         
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
export default caseBar;
