import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.jpg";
import navIcon3 from "../assets/img/nav-icon3.png";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <br/>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nandni-dixit-0aba96252/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://x.com/DixitNandni2"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Nandni-Dixit"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright@ 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;