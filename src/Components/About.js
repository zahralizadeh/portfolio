import React, { Component } from "react";
import { Row, Col } from "reactstrap";
class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about" className="services">
          <div className="container">
            <div className="section-title">
              <span>About Me</span>
              <h2>About Me</h2>
              <p>
                I'm a freelance web Developer based in Adelaide, Australia.
                <br />I enjoy challenging myself with new languages, frameworks
                and methodologies while my core languages are Python,
                JavaScript, HTML and CSS.
                <br />I have serious passion to help businesses do better online
                and creating intuitive, dynamic user experiences.
              </p>
              <a href="#footer">Let's make something special.</a>
            </div>
            <Row>
              <Col
                md="6"
                lg="3"
                className="d-flex align-items-stretch mb-5 mb-lg-0"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4 className="title">Fast</h4>
                  <p className="description">
                    Fast load times and lag free interaction, my highest
                    priority
                  </p>
                </div>
              </Col>
              <Col
                md="6"
                lg="3"
                className="d-flex align-items-stretch mb-5 mb-lg-0"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-rocket"></i>
                  </div>
                  <h4 className="title">Dynamic</h4>
                  <p className="description">
                    I love making pages come to life
                  </p>
                </div>
              </Col>
              <Col
                md="6"
                lg="3"
                className="d-flex align-items-stretch mb-5 mb-lg-0"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-devices"></i>
                  </div>
                  <h4 className="title">Responsive</h4>
                  <p className="description">
                    My layouts will work on any device, big or small
                  </p>
                </div>
              </Col>
              <Col
                md="6"
                lg="3"
                className="d-flex align-items-stretch mb-5 mb-lg-0"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxs-wrench"></i>
                  </div>
                  <h4 className="title">Functional</h4>
                  <p className="description">
                    I like solving problems and providing decent solutions
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default About;
