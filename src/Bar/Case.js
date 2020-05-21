import React from "react";
import { ResponsiveBar } from "@nivo/bar";

import Pagination from "./Pagination";

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
        dailyDIFF: numbers2[key],
      });
    }

    return (
      <>
        <div className="row ">
          <div className="col-md-8 col-12">
  
            <div className="chartBar ">
              <ResponsiveBar
                data={newData}
                keys={["dailyDIFF"]}
                indexBy="date"
                margin={{ top: 5, right: 0, bottom: 48, left: 41 }}
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
          <div className="col-md-4 col-12  ">
         <div className='text-center'>   Top 5
           </div>
            <List cases={this.props.cases} />
          </div>
        </div>
      </>
    );
  }
}
export default caseBar;

class List extends React.Component {
  state = {
    currentCountries: [],
    currentPage: null,
  };

  onPageChanged = (data) => {
    const caseData = this.props.cases.slice(1);
    const { currentPage, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = caseData.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentCountries });
  };
  render() {
    const { currentCountries } = this.state;

    const caseData = this.props.cases;

    const totalCountries = caseData.length;

    caseData.sort(function (a, b) {
      return b.cases - a.cases;
    });

    if (totalCountries === 0) return null;

    return (
      <>
        <div className=" ">
          {currentCountries.map((country) => (
            <CountryCard
              key={country.country}
              country={country.country}
              cases={country.cases}
              deaths={country.deaths}
              recovered={country.recovered}
            />
          ))}
          <div className="mx-auto d-block ">
            <Pagination
              totalRecords={totalCountries}
              pageLimit={6}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
          </div>
        </div>
      </>
    );
  }
}

const CountryCard = (props) => {
  return (
    <>
      <div className="mapData">
        {props.country}
        <span className=" lvalue">{props.cases}</span>
      </div>
    </>
  );
};
