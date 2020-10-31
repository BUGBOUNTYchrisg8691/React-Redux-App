import { useEffect, useState } from "react";
import Axios from "axios";
import { connect, dispatch } from "react-redux";
import { fetchData } from "./actions";
import { BASE_URL } from "./constants";

import logo from "./logo.svg";
import "./App.css";

function App(props) {
  useEffect(() => {
    Axios.get(BASE_URL)
      .then((resp) => {
        props.fetchData(resp.data.results);
      })
      .catch((err) => {
        debugger;
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon,
  };
}

export default connect(mapStateToProps, { fetchData })(App);
