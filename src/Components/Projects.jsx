import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./Projectcard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects(){

  const projects = [
    {
      title: "Dev Connector",
      description: "Social network for developers to connect and share",
      link : "",
      imgUrl: projImg1,
    },
    {
      title: "Resume Parser",
      description: "Resume Data Extraction WebApp",
      link: "https://github.com/Nandni-Dixit/Resume-Parser-Webapp",
      imgUrl: projImg2,
    },
    {
      title: "Netflix Replica",
      description: "Movie streaming UI clone",
      link:"https://nandni-dixit.github.io/Netflix_Clone/",
      imgUrl: projImg3,
    },
    {
      title: "Brand Page",
      description: "Responsive React-based landing page",
      link:"https://brand-page-neon.vercel.app/",
      imgUrl: projImg4,
    },
    {
      title: "Movers Hub",
      description: "Responsive brand page for a moving services company",
      link:"https://nandni-dixit.github.io/Movers-hub/",
      imgUrl: projImg5,
    },
    {
      title: "Temperature Converter",
      description: "Vanilla JS app to convert between Celsius & Fahrenheit",
      link:"https://nandni-dixit.github.io/Temprature_converter/",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Developed a full-stack web app using React, Flask, and Firebase during an internship at DeepArc Tech. Built multiple responsive frontend projects with HTML, CSS, and JavaScript at Bhart Intern. Projects include authentication, form validation, real-time data handling, and UI/UX-focused designs tailored for real-world applications in diverse domains.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p></p>
                    </Tab.Pane> 
                     <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects;