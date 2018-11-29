import React, { Component } from "react";
import Thenavbar from "./components/navbar";
import GameCard from "./components/card";
import "./App.css";
import Layout from "./components/layout";

class App extends Component {
  render() {
    return (
      <div>
        <Thenavbar />
        <GameCard />
      </div>
    );
  }
}

export default App;
