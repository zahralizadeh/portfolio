import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <h3>Zahra Alizadeh</h3>
          <p>You're awesome and I'm flattered. What's on your mind?</p>
          <div className="social-links">
            <a href="mailto:zahra.alizadeh@gmail.com" className="mail">
              <i className="bx bx-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/zahralizadeh/"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/zahralizadeh"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a href="live:zahralizadeh" className="skype">
              <i className="bx bxl-skype"></i>
            </a>
          </div>
          <div className="copyright">
            I built this site with React components and a JSON Schema.
          </div>
          <div className="credits">
            The full source code can be found in my{" "}
            <a
              href="https://github.com/zahralizadeh/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repo
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
