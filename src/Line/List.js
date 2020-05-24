import React from "react";
import Pagination from "./Pagination";
import countries from "../data/Countries";

export default class List extends React.Component {
  state = {
    currentCountries: [],
    currentPage: null,
  };

  onPageChanged = (data) => {
    const allCountries = countries.slice(1);
    const { currentPage, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = allCountries.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentCountries });
  };
  render() {
    const { currentCountries } = this.state;

    const allCountries = countries;
  
    console.log(allCountries)
    const totalCountries = allCountries.length;
    if (totalCountries === 0) return null;

    const sortCountries = countries
    sortCountries.sort(function (a, b) {
      return b.cases - a.cases;
    });
    const n = 500;
    const caseArray = sortCountries.slice(1, n);
 
    return (
      <>
        <table className="table table-hover text-center category">
          <thead>
            <tr>
              <th>Country</th>
              <th>Case</th>
              <th>Death</th>
              <th>Recovery</th>
            </tr>
          </thead>
          <tbody>
            {currentCountries.map((country) => (
              <CountryCard
                key={country.country}
                country={country.country}
                cases={country.cases}
                deaths={country.deaths}
                recovered={country.recovered}
              />
            ))}
          </tbody>
        </table>
        <div className=" ">
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
      <tr>
        <td>{props.country}</td>
        <td> {Intl.NumberFormat().format(props.cases)}</td>
        <td> {Intl.NumberFormat().format(props.deaths)}</td>
        <td> {Intl.NumberFormat().format(props.recovered)}</td>
      </tr>
    </>
  );
};
