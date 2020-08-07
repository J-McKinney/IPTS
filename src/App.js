import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "./assets/transparentLogoIcon.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="headerWrapper">
        <Container fluid className="headerContainer">
          <Row className="headerRow">
            <Col className="headerMVCLogo">
              <img className="headerImgMVCLogo" src={Logo} alt="MVC Logo" />
            </Col>
            <Col className="headerPhoneNumber"><h5>(404) 919-5150</h5></Col>
            <Col className="headerLocationInfo"><h5>Location</h5></Col>
            <Col className="headerContactInfo"><h5>Contact</h5></Col>
            <Col className="headerMenuOptions"><h5>Menu</h5></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
