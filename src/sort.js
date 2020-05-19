import React from "react";
import countries from "./data/Countries";
import Pagination from "./trial/Pagination";

export default class Sort extends React.Component {
  state = {
    allCountries: countries,
    currentCountries: [],
    currentPage: null,
  };

  onPageChanged = (data) => {
    const { allCountries } = this.state;
    const { currentPage, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = allCountries.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentCountries });
  };
  render() {
    const { allCountries, currentCountries } = this.state;
    const totalCountries = allCountries.length;

    allCountries.sort(function (a, b) {
      return b.deaths - a.deaths;
    });

    if (totalCountries === 0) return null;

    return (
      <>
        <div className="card bottom">
          <div className="card-header">
            <div className="float-right">
              <button>
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            {currentCountries.map((country) => (
              <CountryCard
                key={country.country}
                country={country.country}
                deaths={country.deaths}
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
        <span className=" lvalue">{props.deaths}</span>
      </div>
    </>
  );
};
