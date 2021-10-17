import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiHackerrank,
  SiCodechef,
} from "react-icons/si";

function CodingWebsiteStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <a  href='https://www.hackerrank.com/hetparekh263' target='blank_' title="Hackerrank">
            <Col  xs={4} md={4} className="tech-icons">
                <SiHackerrank style={{color:"#fff"}} title="Hackerrank"/>
            </Col>
        </a>
        <a href='https://www.codechef.com/users/leminoss' target='blank_' title="CodeChef">
            <Col xs={4} md={4} className="tech-icons">
                <SiCodechef style={{color:"#fff"}} title="CodeChef"/>
            </Col>
        </a>
    </Row>
  );
}

export default CodingWebsiteStack;
