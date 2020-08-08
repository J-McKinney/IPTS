import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "./assets/transparentLogoIcon.png";
import DogWindow from "./assets/dogCarWindow.jpg";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    console.log("componentDidMount");
  }

  stickyFunction = () => {
    console.log("Hello World!");
  };

  render() {
    return (
      <>
        <div className="SiteWrapper">
          {/* HEADER */}
          <div className="headerWrapper">
            <Container fluid className="headerContainer">
              <Row className="headerRow">
                <div id="headerMVCLogoCol" className="col-md-5">
                  <img className="headerMVCLogo" src={Logo} alt="MVC Logo" />
                </div>
                <div id="nestedCol" className="col-md-7">
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
            <div className="videoWrapper">
              <Row>
                <video
                  autoPlay={true}
                  loop={true}
                  className="MVCVideo"
                  src={`https://d1l9wtg77iuzz5.cloudfront.net/assets/5637/236873/original.mp4?1530551954`}
                  alt="MVC Video"
                ></video>
              </Row>
            </div>

            <div className="travelWrapper">
              <Container className="travelContainer">
                <div className="h1TravelTagHeader">
                  <h1 className="h1TravelTagTitle">
                    Thinking Of Traveling With Pets?
                  </h1>
                </div>
                <div className="h3TravelTagSubHeader">
                  <h3 className="h3TravelTagSubParagraph">
                    Taking your dog or cat on a flight abroad? Make sure you
                    have your pet’s documents when traveling internationally and
                    returning home to the United States. Leave yourself plenty
                    of time before the trip to take care of your pet’s required
                    medical care and paperwork. Remember to start the process
                    early.
                  </h3>
                </div>
                <Row className="h4TravelTagRow">
                  <Col className="h4TravelTagCol">
                    <h4 className="h4TravelTagParagraph">
                      When traveling with your pet/pets, there may be animal
                      health requirements specific for that destination. As soon
                      as you know your travel details, contact your local
                      veterinarian to assist with the pet travel process.
                      Factors to consider may include meeting time frames for
                      obtaining a health certificate, updating vaccinations,
                      diagnostic testing, or administration of
                      medications/treatments.
                    </h4>
                  </Col>
                  <Col>
                    <img
                      className="dogWindow"
                      src={DogWindow}
                      alt="Dog w/head out window"
                    />
                  </Col>
                </Row>
              </Container>
            </div>

            <div></div>
          </div>
          {/* MAIN CONTENT */}
          <br />
        </div>
      </>
    );
  }
}

export default App;
