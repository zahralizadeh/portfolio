import React, { Component } from "react";
class Hero extends Component {
  render() {
    return (
      <section id="hero">
        <div className="hero-container">
          <h1>Zahra Alizadeh</h1>
          <h2>
            I'm a Web Developer, mostly enjoy working with Django &amp; React.
          </h2>
          <a href="#about" className="btn-scroll scrollto" title="Scroll Down">
            <i className="bx bx-chevron-down"></i>
          </a>
        </div>
      </section>
    );
  }
}
export default Hero;
