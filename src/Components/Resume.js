import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ResumeDetails from "../ResumeDetails";
import ResumeItem from "./ResumeItem";

class Resume extends Component {
  render() {
    return (
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <span>My Resume</span>
            <h2>My Resume</h2>
            <p>A brief summary of my background</p>
          </div>
          <Row>
            <Col lg="6">
              <ResumeItem title="summary" items={ResumeDetails.summary} />
            </Col>
            <Col lg="6">
              <ResumeItem title="Education" items={ResumeDetails.Education} />
            </Col>
          </Row>
          <Row>
            <Col>
              <ResumeItem title="Experience" items={ResumeDetails.Experience} />
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
export default Resume;
