import React, { Component } from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Skills />
        <Experience />
        <Education />
      </React.Fragment>
    );
  }
}
export default Main;
