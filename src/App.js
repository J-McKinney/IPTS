import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Logo from "./assets/transparentLogoIcon.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="headerWrapper">
        <Container fluid className="headerContainer">
          <Row className="headerRow">
            <div id="headerMVCLogoCol" className="col-md-6">
              <img className="headerMVCLogo" src={Logo} alt="MVC Logo" />
            </div>
            <div id="nestedCol" className="col-md-6">
              <Row id="nestedRow" className="nestedRow">
                <div id="headerMVCPhoneNumber" className="col-md-3">
                  <h5>(404) 919-5150</h5>
                </div>
                <div id="headerMVCLocationInfo" className="col-md-3">
                  <h5>Location</h5>
                </div>
                <div id="headerMVCContactInfo" className="col-md-3">
                  <h5>Contact</h5>
                </div>
                <div id="headerMVCMenu" className="col-md-3">
                  <div className="menuBarIcon">
                    <div className="bar1" />
                    <div className="bar2" />
                    <div className="bar3" />
                  </div>
                  <h5>Menu</h5>
                </div>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
