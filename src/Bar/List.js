import React from "react";
import Pagination from "./Pagination";

export default class List extends React.Component {
  state = {
    currentCountries: [],
    currentPage: null,
  };

  onPageChanged = (data) => {
    const allCountries = this.props.cases;
    const { currentPage, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = allCountries.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentCountries });
  };
  render() {
    const { currentCountries } = this.state;

    const allCountries = this.props.cases;

    const cases = this.props.cases;

    const totalCountries = allCountries.length;

    console.log(cases);

    allCountries.sort(function (a, b) {
      return b.cases - a.cases;
    });

    if (totalCountries === 0) return null;

    return (
      <>
      <table className='table  table-dark table-sm text-center mt-3'>
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
        <td>{props.cases}</td>
        <td>{props.deaths}</td>
        <td>{props.recovered}</td>
      </tr>
    </>
  );
};
