import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "./assets/transparentLogoIcon.png";
import DogWindow from "./assets/dogCarWindow.jpg";
import DogCrate from "./assets/dogInCrate.jpg";
import HikerDog from "./assets/hikerDog.jpg";
import "./App.css";

class App extends Component {
  state = {
    playVideo: false,
    loopVideo: false,
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ playVideo: true });
    this.setState({ loopVideo: true });
  }

  stickyFunction = () => {
    console.log("Hello World!");
  };

  render() {
    return (
      <>
        {/* WEBSITE CONTENT */}
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
                      <h5>
                        <a
                          href="tel:4049195150"
                          // US area code href phone tag
                          // href="tel:+14049195150"
                        >
                          (404)919-5150
                        </a>
                      </h5>
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
                  autoPlay={this.state.playVideo}
                  loop={this.state.loopVideo}
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

            {/* HEALTH CERTIFICATE WRAPPER */}
            <div className="healthCertificateWrapper">
              <Container className="healthCertificateContainer">
                <div className="h1healthCertificateTagHeader">
                  <h1 className="h1healthCertificateTagTitle">
                    Health Certificate
                  </h1>
                </div>
                <div className="h3healthCertificateTagSubHeader">
                  <h3 className="h3healthCertificateTagSubParagraph">
                    A health certificate is required when shipping your pet as
                    cargo, and for all pets checked as baggage like those
                    traveling with a U.S. Military or U.S. State Department
                    Foreign Service Office Member. Your veterinarian, the U.S.
                    Department of Agriculture, or the Department of Agriculture
                    for your destination state may provide you with more
                    information.
                  </h3>
                </div>
                <Row className="h4healthCertificateTagRow">
                  <Col className="h4healthCertificateTagCol">
                    <h3 className="h3healthCertificateTagTitle">
                      Health Requirements
                    </h3>
                    <h4 className="h4healthCertificateTagParagraph">
                      Exposure to unfamiliar environments, people and movements
                      impacts each animal differently and poses risks that could
                      lead to illness, injury, or escape. While obtaining a
                      health certificate, please discuss the risks of air travel
                      with your veterinarian. Consider your animal’s age,
                      medical history of pre-existing conditions, and/or whether
                      it has anxiety disorders that may be exacerbated during
                      travel.
                    </h4>
                  </Col>
                  <Col>
                    <img
                      className="hikerDog"
                      src={HikerDog}
                      alt="Dog w/head out window"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
            {/* HEALTH CERTIFICATE WRAPPER */}
          </div>
          {/* MAIN CONTENT */}

          {/* FOOTER CONTENT */}
          <div className="footerWrapper">
            <Container className="footerContainer">
              <Row className="footerAddressRow">
                <div id="footerLogoCol" className="col-md-2">
                  <a href="/">
                    <img
                      className="FooterLogo"
                      src={Logo}
                      alt="Footer MVC Logo"
                    />
                  </a>
                </div>
                <div id="footerMVCTag" className="col-md-3">
                  <h5>
                    <a href="https://www.mariettavetclinic.com/">
                      Marietta Vet Clinic
                    </a>
                  </h5>
                </div>
                <div id="footerMVCPhoneNumberTag" className="col-md-3">
                  <h5>
                    <a
                      href="tel:4049195150"
                      // US area code href phone tag
                      // href="tel:+14049195150"
                    >
                      (404)919-5150
                    </a>
                  </h5>
                </div>
                <div id="footerMVCInquiryTag" className="col-md-2">
                  <h5>
                    <a href="/">INQUIRY</a>
                  </h5>
                </div>
                <div id="footerMVCFAQTag" className="col-md-1">
                  <h5>
                    <a href="/">FAQ</a>
                  </h5>
                </div>
                <div id="blankDiv" className="col-md-1" />
                {""}
              </Row>
            </Container>
          </div>
          {/* FOOTER CONTENT */}
        </div>
        {/* WEBSITE CONTENT */}
      </>
    );
  }
}

export default App;
