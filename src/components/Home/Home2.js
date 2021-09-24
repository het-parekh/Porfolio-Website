import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";
import {GrMail} from 'react-icons/gr'
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
              Hello Everyone! My name is <span className="purple">Het Parekh.</span> I am
              from <span className="purple"> Mumbai, India.</span>
              <br />I am a  pursuing Engineering in<span className="purple"> CS / IT</span> from 
              <span className="purple"> Mumbai University.</span>
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Trekking
              </li>
              <li className="about-activity">
                <ImPointRight /> Reading Tech Blogs or Articles
              </li>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
            </ul>

            <div class="quote">
              <blockquote>
                <p style={{ color: "#ff4da6",marginLeft:25  }}>
                  Hard work beats talent when talent doesn't work hard enough!{" "}
                </p>
              </blockquote> 
              <span style={{color:"#f5f5f5"}}>- My Motto</span>
        
            </div>
            </blockquote>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="myAvatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/het-parekh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/het-parekh-87839a1b0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hetparekh26@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <GrMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
