import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import attendance from "../../Assets/Projects/attendance.png";
import iot from "../../Assets/Projects/Iot Management.jpeg";
import dw from "../../Assets/Projects/donation website.png";
import webscraper from "../../Assets/Projects/webscraper.jpg";
import exam from "../../Assets/Projects/exam.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="This is my portfolio website providing professional information about me and about my work. Infact you are browsing it right now!"          
              link="https://github.com/het-parekh/Porfolio-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exam}
              isBlog={false}
              title="Online Proctored Examination"
              description="An online anti-cheating website that makes remote exams much more reliable. It has got several anti-cheat features like only fullscreen mode,no tab switching allowed, per question timer etc. It has been tested and currently supports upto 45 students at once. It is developed using the flask framework."          
              link="https://github.com/het-parekh/Test-wise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="Attendance System"
              description="This project was made for a 1 month hackathon competition where we had to solve a complex problem statement and come up with a solution in form of a GUI. This Website takes and manages the attendances of CMS workforce in a very efficient and easy manner. It built using React.js and Node.js (MERN) Stack."
              link="https://github.com/het-parekh/count-attendance-hackathon"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="IOT Inventory Issue Return System "
              description="This project is about digitizing inventory management for iot components. It keeps track of all components issued and returned , and manages the database according to it. All the issues and returns will be made through the website. It is built using HTML, CSS , JQuery and PHP."          
              link="https://github.com/het-parekh/IOT-Inventory-Issue-Return-System-"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dw}
              isBlog={false}
              title="Free Stuff 4 U "
              description="'Freestuff4U' a website to promote the helping nature of people. We provide the people a platform to help each other. Using our website an individual can donate any essential item such as books, stationary, bicycle etc. that he or she possesses and is willing to give it to anyone who is in need of it at no monetary cost."          
              link="https://github.com/het-parekh/donation_website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webscraper}
              isBlog={false}
              title="Python Web Scraper"
              description="This is a python web-scraper for Internshala ,a website for finding Internships. It is made using BeautifulSoup4 to assist in getting info regarding all the ongoing internships in any field with several filters and easy to use UI."          
              link="https://github.com/het-parekh/Internshala-Web-Scraper-Internshala.com"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
