import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import Intro from "./Components/Intro/Intro";
import AboutMe from "./Components/AboutMe/AboutMe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Intro />
        <AboutMe />
        {/* {Routes} */}
      </div>
    );
  }
}

export default App;
