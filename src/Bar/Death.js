import React from "react";
import { ResponsiveBar } from "@nivo/bar";

class deathBar extends React.Component {
  render() {
    const historyDates = this.props.data;

    let chartData = [];

    const deaths = historyDates[0].deaths;
    for (let key in deaths) {
      chartData.push({
        date: key,
        death: deaths[key],
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
    var preValue;
    dataDeath.map(myFunction);

    function myFunction(value0) {
      if (preValue) {
        numbers2.push(value0 - preValue);
      }
      preValue = value0;
    }

    dataDeath.shift();

    for (let key in dataDeath) {
      newData.push({
        date: date[key],
        daily: numbers2[key],
      });
    }

    const todayDeath = this.props.today[0].todayDeaths;
    const yesterdayDeath = numbers2[28];
    function compare(a, b) {
      return ((b / a - 1) * 100).toFixed(2);
    }
    const rate = compare(yesterdayDeath, todayDeath);

    let rateRewrite;
    if (rate > 0) {
      rateRewrite = rate;
    } else rateRewrite = rate * -1;

    return (
      <>
        <div className="row ">
          <div className="col-md-9 col-12">
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
                labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
              />
            </div>
          </div>
          <div className="col-md-3 col-12  text-center ">
          <div className="top-head p-1 death ">Today's Deaths</div>
          <div className="kane shadow  rounded">
              <div className="value death">
                {Intl.NumberFormat().format(todayDeath)}
              </div>
              <div className="mb-3 ">
                <span className=" output slideIn">
                  {rate > 0 ? (
                    <span className="green">
                      <span>
                        <i className="fas fa-caret-up"></i>
                      </span>{' '}
                      {rateRewrite}%
                    </span>
                  ) : (
                    <span className="red">
                      <span>
                        <i className="fas fa-caret-down"></i>
                      </span>{' '}
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
export default deathBar;

class List extends React.Component {
  render() {
    const deathData = this.props.deaths;
    deathData.sort(function (a, b) {
      return b.deaths - a.deaths;
    });

    const n = 8;
    const deathArray = deathData.slice(1, n);

    return (
      <>
        <div className=" table card">
          {deathArray.map((country) => (
            <>
              <div className="mapData  border" key={country.country}>
                {country.country}
                <span className="lvalue">
                  {Intl.NumberFormat().format(country.deaths)}
                </span>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}
