import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Logo from "./assets/transparentLogoIcon.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="SiteWrapper">
        {/* HEADER */}
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
                    <h5>LOCATION</h5>
                  </div>
                  <div id="headerMVCContactInfo" className="col-md-3">
                    <h5>CONTACT</h5>
                  </div>
                  <div id="headerMVCMenu" className="col-md-3">
                    <Row className="nestedMenuRow">
                      <div id="menuBarIcon" className="col-md-3">
                        <div className="bar1" />
                        <div className="bar2" />
                        <div className="bar3" />
                      </div>
                      <div className="col-md-9">
                        <h5 className="headerh5Menu">MENU</h5>
                      </div>
                    </Row>
                  </div>
                </Row>
              </div>
            </Row>
          </Container>
        </div>
        {/* HEADER */}

        {/* MAIN CONTENT */}
        <div className="mainContentWrapper">
          <Container>
            <video
              autoPlay={true}
              loop={true}
              className="MVCVideo"
              src={`https://d1l9wtg77iuzz5.cloudfront.net/assets/5637/236873/original.mp4?1530551954`}
              alt="MVC Video"
            ></video>
          </Container>
        </div>
        {/* MAIN CONTENT */}
      </div>
    </>
  );
}

export default App;
