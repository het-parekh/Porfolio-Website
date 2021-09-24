import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/HET_PAREKH_RESUME.pdf";
import { AiOutlineDownload , AiFillStar} from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Frontend Developer Intern [ K.J. Somaiya ]"
              date="June 2021 - September 2021"
              content={[
                "Worked on the development of an Examiner Appointment Portal.",
                "Translated designs and wireframes into a highly responsive user interface and reusable components using React.js.",
                "Used Back-End APIs to display data using the Custom Components, library Components, and Redux.",
                "Used EsLint as the bug tracking system to track and remove the bugs/issues on an everyday basis.",
              ]}
            />
            <Resumecontent
              title="Full Stack Developer [ Image pvt. ltd. ]"
              date="December 2019 - January 2020"
              content={[
                "Worked on the development of an Issue and Return website from scratch.",
                "Innovated ideas and solutions to solve the tedious problems caused previously due to records stored as hard copies.",
                "Worked in a team of 5 to brainstorm ideas and complete the assigned work in a given deadline.",
                "Developed the front-end UI using HTML,CSS and jQuery and backend using PHP.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Code Adventures 3.0 by Riddl]"
              content={[
                "Developed a website to solve a complex problem statement provided by the CMS organization.",
                "Worked on building front-end UI design using React and building API routes using Node and express.js.",
                "The hackathon lasted for a period of 1 month."
              ]}
            />
            <Resumecontent
              title="Problem Solving [Hackerrank and Code Chef]"
              content={[
                "Solved several problems in various programming languages in Hackerank.",
                "Took part in various long and short challanges on Code Chef.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Xth STD "
              date="2015 - 2016"
              content={[`Percentage %: 91`]}
            />
            <Resumecontent
              title="XIIth STD"
              date="2017 - 2018"
              content={[`Percentage %: 79.07`]}
            />
            <Resumecontent
              title="Btech in Information Technology [K.J.S.E.I.T , Mumbai University]"
              date="2018 - Present"
              content={[`CGPA: 8.51  (Till 6th Sem)`]}
            />

            {/* <h3 className="resume-title">Publications</h3>
            <Resumecontent
              title=""
              content={[
                "Article entitled An Overlapping Sliding Window and Combined Feature based Emotion Recognition System for EEG Signals publised in Emerald Publication;10.1108/ACI-05-2021-0130",
              ]}
            /> */}

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "SWD (Skill Worforce Development) Certificate of excellence for Core Java for scoring A+ Grade. ",
                "Certificate of appreciation for the IoT Inventory Management project by college",
                "Reached final (Top 10%) for query hunters competition organized by D.Y Patil",
                `Hackerrank certifications - Python, Advanced Problem Solving, React`,
                <span>5< AiFillStar fontSize='small'/> star Hackerrank badges - problem solving, Java, Python</span>,
                
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
