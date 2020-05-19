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

    var dataCase = [];
    for (let key in deaths) {
      dataCase.push(deaths[key]);
    }

    var date = [];
    for (let key in deaths) {
      date.push(key);
    }

    var newData = [];
    var numbers2 = [];
    var preValue;
    dataCase.map(myFunction);

    function myFunction(value0) {
      if (preValue) {
        numbers2.push((value0 - preValue) / preValue);
      }
      preValue = value0;
    }

    dataCase.shift();

    for (let key in dataCase) {
      newData.push({
        x: date[key],
        y: numbers2[key],
        deaths: dataCase[key],
      });
    }

    final.push({
      data: newData,
    });

    return (
      <>
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

