import React from "react";
import { ResponsiveLine } from "@nivo/line";

export default class  HistoryDeath extends React.Component {

  render() {
    const historyDates  = this.props.data;

    let chartData = [];
    let final = [];

    const deaths = historyDates[0].deaths;
    for (let key in deaths) {
      chartData.push({
        date: key,
        case: deaths[key],
      });
    }

    var dataDeath = [];
    for (let key in deaths) {
      dataDeath.push(deaths[key]);
    }

    var date = [];
    for (let key in deaths) {
      date.push(key);
    }

    var newData = [];
    var numbers2 = [];
    var numbers3 = [];

    var preValue;
    var preValue2;

    dataDeath.map(myFunction);

    function myFunction(value0) {
      if (preValue) {
        numbers2.push(value0 - preValue);
      }
      preValue = value0;
    }

    dataDeath.shift();

    var newdataDeath = [];
    for (let key in numbers2) {
      newdataDeath.push(numbers2[key]);
    }

    newdataDeath.map(percent2);

    function percent2(value) {
      if (preValue) {
        numbers3.push(value / preValue2 - 1);
      }
      preValue2 = value;
    }


    for (let key in dataDeath) {
      newData.push({
        x: date[key],
        y: numbers2[key],
        z: numbers3[key],
        deaths: dataDeath[key],
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

