import { Container, Row, Col } from "react-bootstrap";
import navIcon2 from "../components/assets/nav-icon2.svg";
import navIcon3 from "../components/assets/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/belinda.ng.56">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/belinda.ngg/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>By Shawn Chee</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
