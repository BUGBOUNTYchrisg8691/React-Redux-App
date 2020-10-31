import { useEffect, useState } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { fetchData } from "./actions";
import { BASE_URL } from "./constants";

import PokemonList from "./components/PokemonList";

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
      <header>List of Pokemon</header>
      {props.pokemon && <PokemonList />}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon,
  };
}

export default connect(mapStateToProps, { fetchData })(App);
