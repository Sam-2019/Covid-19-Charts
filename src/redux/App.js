import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CountryStat from "./pages/Country/CountryStats";
import WorldStat from "./pages/World/Worldstats";
import NewWorldStats from './redux/NewWorldstats'

import "./css/css.css";

function App() {
  return (
    <>
      <Router>
        <Header />
<NewWorldStats />
        <div className="">
          <div className="container">
            <Route exact path="/home" component={WorldStat} />
            <Route path="/country" component={CountryStat} />
          </div>
        </div>
      </Router>
    </>
  );
}

function Header() {
  return (
    <>
      <nav className="navbar  navbar-dark sticky-top shardow navie">
        <div className=" covid-head">COVID-19 Stats</div>

        <div className="mynav">
          <Link to="/home" className=" text-sm-center  nav-link linkz">
            World
          </Link>
          <Link to="/country" className=" text-sm-center  nav-link linkz">
            Countries
          </Link>
          <span>
            <i className="fab fa-github git"></i>
          </span>
        </div>
      </nav>
    </>
  );
}

export default App;
