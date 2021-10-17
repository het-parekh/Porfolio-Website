import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  // DiCss3,
  DiMysql
} from "react-icons/di";
import {AiFillHtml5} from "react-icons/ai"
import { SiDjango, SiFlask } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="HTML 5">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title = "Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Mongodb">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Django">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Flask">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <DiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
