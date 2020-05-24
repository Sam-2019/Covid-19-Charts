import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../pages/Spinner";
import { getWorldData } from '../redux/actions/dataActions'

class NewWorldstats extends Component {

  render() {
    const worldCases = this.state.worldCases;
    let worldContent;
    let lengthworldCases = Object.keys(worldCases).length;

    if (lengthworldCases === 0) {
      worldContent = <Spinner />;
    } else if (lengthworldCases > 0) {
      worldContent = (
        <>
          <div className="head mb-2">Worldwide</div>
          <div className=" px-4">
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <div className="cardie py-3 worldCases">
                  {Intl.NumberFormat().format(worldCases.cases)}
                </div>
                <div className="label case-label">worldCases</div>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <div className="cardie py-3 active">
                  {Intl.NumberFormat().format(worldCases.active)}
                </div>
                <div className="label  active-label">Active</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <div className="cardie py-3 deaths">
                  {Intl.NumberFormat().format(worldCases.deaths)}
                </div>
                <div className="label  death-label">Deaths</div>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <div className="cardie py-3 recovered">
                  {Intl.NumberFormat().format(worldCases.recovered)}
                </div>
                <div className="label  recovery-label">Recoveries</div>
              </div>
            </div>

            <div className="contain col-12 col-md-6 mb-3">
              <div className="">
                <div className="cardie py-3 countries">
                  {Intl.NumberFormat().format(worldCases.affectedCountries)}
                </div>
                <div className="label  country-label">Affected Countries</div>
              </div>
            </div>
          </div>
        </>
      );
    }

    return <>{worldContent}</>;
  }
}

const mapStateToProps = (state) => ({
    worldCases: state.worldCases,
});

export default connect(mapStateToProps, { getWorldData })(NewWorldstats);
