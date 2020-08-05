import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SkillsDetails from "../SkillsDetails";

class Skills extends Component {
  render() {
    return (
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-title">
            <span>My Skills</span>
            <h2>My Skills</h2>
            <p>I like to extend my skills. I enjoy to be a life learner!</p>
          </div>
          <Row>
            <Col className="info-box">
              <Row className="text-center">
                {SkillsDetails.map((item, i) => (
                  <Col xs="4" lg="2" className="mb-5" key={i}>
                    <img
                      alt={item.name}
                      src={item.logo}
                      className="responsive-img"
                    />
                    <span>{item.name}</span>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
export default Skills;
