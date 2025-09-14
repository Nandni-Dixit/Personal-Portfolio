import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl, link }){
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br/>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-outline-light mt-2">Try Live</button>
            </a>
          )}
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;