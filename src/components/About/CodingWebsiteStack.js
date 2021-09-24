import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiHackerrank,
  SiCodechef,
} from "react-icons/si";

function CodingWebsiteStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <a  href='https://www.hackerrank.com/hetparekh263' target='blank_'>
            <Col  xs={4} md={4} className="tech-icons">
                <SiHackerrank style={{color:"#3d0099"}} />
            </Col>
        </a>
        <a href='https://www.codechef.com/users/leminoss' target='blank_'>
            <Col xs={4} md={4} className="tech-icons">
                <SiCodechef style={{color:"#3d0099"}} />
            </Col>
        </a>
    </Row>
  );
}

export default CodingWebsiteStack;
