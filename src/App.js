import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "./assets/transparentLogoIcon.png";
import DogWindow from "./assets/dogCarWindow.jpg";
import DogCrate from "./assets/dogInCrate.jpg";
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
          <div className="headerWrapper" onClick={this.stickyFunction}>
            <Container fluid className="headerContainer">
              <Row className="headerRow">
                <div id="headerMVCLogoCol" className="col-md-5">
                  <a href="/">
                    <img className="headerMVCLogo" src={Logo} alt="MVC Logo" />
                  </a>
                </div>
                <div id="nestedCol" className="col-md-7">
                  <Row id="nestedRow" className="nestedRow">
                    <div id="blankCol" className="col-md-1" />
                    <div id="headerMVCPhoneNumber" className="col-md-3">
                      <h5>
                        <a href="https://www.mariettavetclinic.com/">
                          Marietta Vet Clinic
                        </a>
                      </h5>
                    </div>
                    <div id="headerMVCLocationInfo" className="col-md-3">
                      <h5>(404) 919-5150</h5>
                    </div>
                    <div id="headerMVCContactInfo" className="col-md-3">
                      <h5>
                        <a href="/">INQUIRY</a>
                      </h5>
                    </div>
                    <div id="headerMVCFAQ" className="col-md-1">
                      <h5>
                        <a href="/">FAQ</a>
                      </h5>
                    </div>
                    <div id="blankCol" className="col-md-1" />
                  </Row>
                </div>
              </Row>
            </Container>
          </div>
          {/* HEADER */}

          {/* MAIN CONTENT */}

          {/* VIDEO WRAPPER */}
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
            {/* VIDEO WRAPPER */}

            {/* TRAVEL WRAPPER */}
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
                    <h3 className="h3TravelTagTitle">
                      First Stop: Your Vet’s Office
                    </h3>
                    <h4 className="h4TravelTagParagraph">
                      When traveling with your pet/pets, there may be animal
                      health requirements specific for that destination. As soon
                      as you know your travel details, contact your local
                      veterinarian to assist with the pet travel process.
                      Factors to consider may include meeting time frames for
                      obtaining a health certificate, updating vaccinations,
                      diagnostic testing, microchips, or administration of
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
            {/* TRAVEL WRAPPER */}

            {/* TRAVEL INFO WRAPPER */}
            <div className="travelInfoWrapper">
              <Container className="travelInfoContainer">
                <div className="h1TravelInfoTagHeader">
                  <h1 className="h1TravelInfoTagTitle">
                    Consider Your Pet’s Comfort
                  </h1>
                </div>
                <div className="h3TravelInfoTagSubHeader">
                  <h3 className="h3TravelInfoTagSubParagraph">
                    Loading and unloading can be the most stressful part of
                    travel for any animal. Make sure your pet is healthy enough
                    to travel. Always consult with your veterinarian first.
                  </h3>
                </div>
                <Row className="h4TravelInfoTagRow">
                  <Col>
                    <img
                      className="dogInCrate"
                      src={DogCrate}
                      alt="Dog w/head out window"
                    />
                  </Col>
                  <Col className="h4TravelInfoTagCol">
                    <h3 className="h3TravelInfoTagTitle">
                      Consider These Tips:
                    </h3>
                    <h4 className="h4TravelInfoTagParagraph">
                      Get your pet used to its carrier before the flight.
                    </h4>
                    <h4 className="h4TravelInfoTagParagraph">
                      Purchase flights with fewer connections or layovers.
                    </h4>
                    <h4 className="h4TravelInfoTagParagraph">
                      Pick departure and arrival times to avoid extreme
                      temperatures.
                    </h4>
                    <h4 className="h4TravelInfoTagParagraph">
                      Walk your pet before leaving home and again before
                      checking in.
                    </h4>
                    <h4 className="h4TravelInfoTagParagraph">
                      Check in early so it can go to the quiet and dimly lit
                      hold of the plane.
                    </h4>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* TRAVEL INFO WRAPPER */}
          </div>
          {/* MAIN CONTENT */}
          <br />
        </div>
      </>
    );
  }
}

export default App;
