import React from "react";
import { ResponsiveLine } from "@nivo/line";

export default class HistoryCase extends React.Component {
  render() {
    const historyDates = this.props.data;

    let chartData = [];
    let final = [];

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
    var numbers3 = [];

    var preValue;
    var preValue2;

    dataCase.map(percent);

    function percent(value) {
      if (preValue) {
        numbers2.push((value - preValue) / preValue);
      }
      preValue = value;
    }

    dataCase.shift();

    var newdataCase = [];
    for (let key in numbers2) {
      newdataCase.push(numbers2[key]);
    }

    newdataCase.map(percent2);

    function percent2(value) {
      if (preValue) {
        numbers3.push(value - preValue2);
      }
      preValue2 = value;
    }

    for (let key in dataCase) {
      newData.push({
        x: date[key],
        y: numbers2[key],
        z: numbers3[key],
        cases: dataCase[key],
      });
    }

    final.push({
      data: newData,
    });

    const rate = (newData[28].z * 100).toFixed(2);

    let rateRewrite;
    if (rate > 0) {
      rateRewrite = rate;
    } else rateRewrite = rate * -1;

    return (
      <>
        <div>

          <span className="value">
          {Intl.NumberFormat().format( this.props.todayCase[0].todayCases)}

          </span>
          <div className="float-right output slideIn">
            <span className="pChange">
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

        <div className="chartLine">
          <ResponsiveLine
            data={final}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            curve="basis"
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            enableGridX={false}
            enableGridY={false}
            colors={{ scheme: "nivo" }}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabel="y"
            pointLabelYOffset={-12}
            enableArea={true}
            isInteractive={false}
            enableCrosshair={false}
            legends={[]}
          />
        </div>
      </>
    );
  }
}
