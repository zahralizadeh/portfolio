import React, { Component } from "react";
import Skills from "./Skills";
import About from "./About";
import Resume from "./Resume";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <About />
        <Resume />
        <Skills />
        {/* Potfolio */}
      </React.Fragment>
    );
  }
}
export default Main;
