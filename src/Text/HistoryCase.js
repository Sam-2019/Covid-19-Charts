import React from "react";
import { ResponsiveLine } from "@nivo/line";

export default class HistoryCase extends React.Component {

  render() {
    const cases = this.props.historyCases;
    const chartData = [];

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

    dataCase.map(percentChange);

    function percentChange(value) {
      if (preValue) {
        numbers2.push((value / preValue - 1) * 100);
      }
      preValue = value;
    }

    console.log(date.shift())
    console.log(dataCase.shift())


    for (let key in dataCase) {
      newData.push({
        x: date[key],
        y: numbers2[key],
        cases: dataCase[key],
      });
    }

    const final = [];

    final.push({
      data: newData,
    });
console.log(final)
    const rate = newData[28].y.toFixed(2);

    let rateRewrite;
    if (rate > 0) {
      rateRewrite = rate;
    } else rateRewrite = rate * -1;

    return (
      <>
        <div className="text-right  slideIn">
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
        </div>

        <div className="chartLine">
          <ResponsiveLine
            data={final}
            margin={{ top: 0, right: 0, bottom: 8, left: 0 }}
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
            isInteractive={true}
            enableCrosshair={false}
            crosshairType="top-left"
            useMesh={true}
            legends={[]}
          />
        </div>
      </>
    );
  }
}
