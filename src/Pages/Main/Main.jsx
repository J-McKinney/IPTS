import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/transparentLogoIcon.png";
import DogWindow from "../../assets/dogCarWindow.jpg";
import DogCrate from "../../assets/dogInCrate.jpg";
import HikerDog from "../../assets/hikerDog.jpg";
import MainStyle from "./Main.module.css";

class Main extends Component {
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
        <div className={MainStyle.SiteWrapper}>
          {/* HEADER */}
          <div
            className={MainStyle.headerWrapper}
            onClick={this.stickyFunction}
          >
            <Container fluid className={MainStyle.headerContainer}>
              <Row className={MainStyle.headerRow}>
                <div id={MainStyle.headerMVCLogoCol} className="col-md-5">
                  <a href="/">
                    <img
                      className={MainStyle.headerMVCLogo}
                      src={Logo}
                      alt="MVC Logo"
                    />
                  </a>
                </div>
                <div id={MainStyle.nestedCol} className="col-md-7">
                  <Row id={MainStyle.nestedRow} className={MainStyle.nestedRow}>
                    <div id={MainStyle.blankCol} className="col-md-1" />
                    <div
                      id={MainStyle.headerMVCPhoneNumber}
                      className="col-md-3"
                    >
                      <h5>
                        <a href="https://www.mariettavetclinic.com/">
                          Marietta Vet Clinic
                        </a>
                      </h5>
                    </div>
                    <div
                      id={MainStyle.headerMVCLocationInfo}
                      className="col-md-3"
                    >
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
                    <div
                      id={MainStyle.headerMVCContactInfo}
                      className="col-md-3"
                    >
                      <h5>
                        <a href="/">INQUIRY</a>
                      </h5>
                    </div>
                    <div id={MainStyle.headerMVCFAQ} className="col-md-1">
                      <h5>
                        <a href="/">FAQ</a>
                      </h5>
                    </div>
                    <div id={MainStyle.blankCol} className="col-md-1" />
                  </Row>
                </div>
              </Row>
            </Container>
          </div>
          {/* HEADER */}

          {/* MAIN CONTENT */}
          {/* VIDEO WRAPPER */}
          <div className={MainStyle.mainContentWrapper}>
            <div className={MainStyle.videoWrapper}>
              <Row>
                <video
                  autoPlay={this.state.playVideo}
                  loop={this.state.loopVideo}
                  className={MainStyle.MVCVideo}
                  src={`https://d1l9wtg77iuzz5.cloudfront.net/assets/5637/236873/original.mp4?1530551954`}
                  alt="MVC Video"
                ></video>
              </Row>
            </div>
            {/* VIDEO WRAPPER */}

            {/* TRAVEL WRAPPER */}
            <div className={MainStyle.travelWrapper}>
              <Container className={MainStyle.travelContainer}>
                <div className={MainStyle.h1TravelTagHeader}>
                  <h1 className={MainStyle.h1TravelTagTitle}>
                    Thinking Of Traveling With Pets?
                  </h1>
                </div>
                <div className={MainStyle.h3TravelTagSubHeader}>
                  <h3 className={MainStyle.h3TravelTagSubParagraph}>
                    Taking your dog or cat on a flight abroad? Make sure you
                    have your pet’s documents when traveling internationally and
                    returning home to the United States. Leave yourself plenty
                    of time before the trip to take care of your pet’s required
                    medical care and paperwork. Remember to start the process
                    early.
                  </h3>
                </div>
                <Row className={MainStyle.h4TravelTagRow}>
                  <Col className={MainStyle.h4TravelTagCol}>
                    <h3 className={MainStyle.h3TravelTagTitle}>
                      First Stop: Your Vet’s Office
                    </h3>
                    <h4 className={MainStyle.h4TravelTagParagraph}>
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
                      className={MainStyle.dogWindow}
                      src={DogWindow}
                      alt="Dog w/head out window"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
            {/* TRAVEL WRAPPER */}

            {/* TRAVEL INFO WRAPPER */}
            <div className={MainStyle.travelInfoWrapper}>
              <Container className={MainStyle.travelInfoContainer}>
                <div className={MainStyle.h1TravelInfoTagHeader}>
                  <h1 className={MainStyle.h1TravelInfoTagTitle}>
                    Consider Your Pet’s Comfort
                  </h1>
                </div>
                <div className={MainStyle.h3TravelInfoTagSubHeader}>
                  <h3 className={MainStyle.h3TravelInfoTagSubParagraph}>
                    Loading and unloading can be the most stressful part of
                    travel for any animal. Make sure your pet is healthy enough
                    to travel. Always consult with your veterinarian first.
                  </h3>
                </div>
                <Row className={MainStyle.h4TravelInfoTagRow}>
                  <Col>
                    <img
                      className={MainStyle.dogInCrate}
                      src={DogCrate}
                      alt="Dog w/head out window"
                    />
                  </Col>
                  <Col className={MainStyle.h4TravelInfoTagCol}>
                    <h3 className={MainStyle.h3TravelInfoTagTitle}>
                      Consider These Tips:
                    </h3>
                    <h4 className={MainStyle.h4TravelInfoTagParagraph}>
                      Get your pet used to its carrier before the flight.
                    </h4>
                    <h4 className={MainStyle.h4TravelInfoTagParagraph}>
                      Purchase flights with fewer connections or layovers.
                    </h4>
                    <h4 className={MainStyle.h4TravelInfoTagParagraph}>
                      Pick departure and arrival times to avoid extreme
                      temperatures.
                    </h4>
                    <h4 className={MainStyle.h4TravelInfoTagParagraph}>
                      Walk your pet before leaving home and again before
                      checking in.
                    </h4>
                    <h4 className={MainStyle.h4TravelInfoTagParagraph}>
                      Check in early so it can go to the quiet and dimly lit
                      hold of the plane.
                    </h4>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* TRAVEL INFO WRAPPER */}

            {/* HEALTH CERTIFICATE WRAPPER */}
            <div className={MainStyle.healthCertificateWrapper}>
              <Container className={MainStyle.healthCertificateContainer}>
                <div className={MainStyle.h1healthCertificateTagHeader}>
                  <h1 className={MainStyle.h1healthCertificateTagTitle}>
                    Health Certificate
                  </h1>
                </div>
                <div className={MainStyle.h3healthCertificateTagSubHeader}>
                  <h3 className={MainStyle.h3healthCertificateTagSubParagraph}>
                    A health certificate is required when shipping your pet as
                    cargo, and for all pets checked as baggage like those
                    traveling with a U.S. Military or U.S. State Department
                    Foreign Service Office Member. Your veterinarian, the U.S.
                    Department of Agriculture, or the Department of Agriculture
                    for your destination state may provide you with more
                    information.
                  </h3>
                </div>
                <Row className={MainStyle.h4healthCertificateTagRow}>
                  <Col className={MainStyle.h4healthCertificateTagCol}>
                    <h3 className={MainStyle.h3healthCertificateTagTitle}>
                      Health Requirements
                    </h3>
                    <h4 className={MainStyle.h4healthCertificateTagParagraph}>
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
                      className={MainStyle.hikerDog}
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
          <div className={MainStyle.footerWrapper}>
            <Container className={MainStyle.footerContainer}>
              <Row className={MainStyle.footerAddressRow}>
                <div id={MainStyle.footerLogoCol} className="col-md-2">
                  <a href="/">
                    <img
                      className={MainStyle.FooterLogo}
                      src={Logo}
                      alt="Footer MVC Logo"
                    />
                  </a>
                </div>
                <div id={MainStyle.footerMVCTag} className="col-md-3">
                  <h5>
                    <a href="https://www.mariettavetclinic.com/">
                      Marietta Vet Clinic
                    </a>
                  </h5>
                </div>
                <div
                  id={MainStyle.footerMVCPhoneNumberTag}
                  className="col-md-3"
                >
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
                <div id={MainStyle.footerMVCInquiryTag} className="col-md-2">
                  <h5>
                    <a href="/">INQUIRY</a>
                  </h5>
                </div>
                <div id={MainStyle.footerMVCFAQTag} className="col-md-1">
                  <h5>
                    <a href="/">FAQ</a>
                  </h5>
                </div>
                <div id={MainStyle.blankDiv} className="col-md-1" />
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

export default Main;
