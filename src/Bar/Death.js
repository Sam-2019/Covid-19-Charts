import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import List from "./List";

class deathBar extends React.Component {
  render() {
    const  historyDates  = this.props.data;

    let chartData = [];

    const cases = historyDates[0].deaths;
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
        dailyDIFF: numbers2[key],
      });
    }
 

    return (
      <>
        <div className="row">
          <div className="col-md-8 col-12">
            Show
            <div className="chartBar">
              <ResponsiveBar
                data={newData}
                keys={["dailyDIFF"]}
                indexBy="date"
                margin={{ top: 0, right: 0, bottom: 48, left: 41 }}
                padding={0.3}
                colors={{ scheme: "category10" }}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 2,
                  tickPadding: 7,
                  tickRotation: -35,
                  legendPosition: "middle",
                  legendOffset: 0,
                }}
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
          <div className="col-md-4 col-12">
            Top 5
            <List data={this.props.data} />
          </div>
        </div>
      </>
    );
  }
}
export default deathBar;
