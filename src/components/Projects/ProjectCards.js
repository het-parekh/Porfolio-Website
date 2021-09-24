import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" className='project_card_img' src={props.imgPath} alt="card-img" />
      <Card.Body>
        <div style={{height:270}} className='project-desc'>
        <Card.Title style={{fontWeight:"bold"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        </div>
        <Button variant="primary" href={props.link} target="_blank">
           View Project
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
