import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit} from 'react-icons/di'
import {
  SiVisualstudiocode,
  SiPostman,
  SiFirebase, 
  SiAdobexd,
  SiGithub
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="VScode">
        <SiVisualstudiocode title="VScode"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman title="Postman"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AdobeXD">
        <SiAdobexd title="AdobeXD"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit title="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <SiGithub title="Github"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
