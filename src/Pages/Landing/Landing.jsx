import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../assets/transparentLogoIcon.png";
import DogWindow from "../../assets/dogCarWindow.jpg";
import DogCrate from "../../assets/dogInCrate.jpg";
import HikerDog from "../../assets/hikerDog.jpg";
import Style from "./Landing.module.css";

class Landing extends Component {
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
        <div className={Style.SiteWrapper}>
          {/* HEADER */}
          <div className={Style.headerWrapper} onClick={this.stickyFunction}>
            <Container fluid className={Style.headerContainer}>
              <Row className={Style.headerRow}>
                <div id={Style.headerMVCLogoCol} className="col-md-5">
                  <a href="/">
                    <img
                      className={Style.headerMVCLogo}
                      src={Logo}
                      alt="MVC Logo"
                    />
                  </a>
                </div>
                <div id={Style.nestedCol} className="col-md-7">
                  <Row id={Style.nestedRow} className={Style.nestedRow}>
                    <div id={Style.blankCol} className="col-md-1" />
                    <div id={Style.headerMVCPhoneNumber} className="col-md-3">
                      <h5>
                        <a href="https://www.mariettavetclinic.com/">
                          Marietta Vet Clinic
                        </a>
                      </h5>
                    </div>
                    <div id={Style.headerMVCLocationInfo} className="col-md-3">
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
                    <div id={Style.headerMVCContactInfo} className="col-md-3">
                      <h5>
                        <a href="/">INQUIRY</a>
                      </h5>
                    </div>
                    <div id={Style.headerMVCFAQ} className="col-md-1">
                      <h5>
                        <a href="/">FAQ</a>
                      </h5>
                    </div>
                    <div id={Style.blankCol} className="col-md-1" />
                  </Row>
                </div>
              </Row>
            </Container>
          </div>
          {/* HEADER */}

          {/* MAIN CONTENT */}
          {/* VIDEO WRAPPER */}
          <div className={Style.mainContentWrapper}>
            <div className={Style.videoWrapper}>
              <Row>
                <video
                  autoPlay={this.state.playVideo}
                  loop={this.state.loopVideo}
                  className={Style.MVCVideo}
                  src={`https://d1l9wtg77iuzz5.cloudfront.net/assets/5637/236873/original.mp4?1530551954`}
                  alt="MVC Video"
                ></video>
              </Row>
            </div>
            {/* VIDEO WRAPPER */}

            {/* TRAVEL WRAPPER */}
            <div className={Style.travelWrapper}>
              <Container className={Style.travelContainer}>
                <div className={Style.h1TravelTagHeader}>
                  <h1 className={Style.h1TravelTagTitle}>
                    Thinking Of Traveling With Pets?
                  </h1>
                </div>
                <div className={Style.h3TravelTagSubHeader}>
                  <h3 className={Style.h3TravelTagSubParagraph}>
                    Taking your dog or cat on a flight abroad? Make sure you
                    have your pet’s documents when traveling internationally and
                    returning home to the United States. Leave yourself plenty
                    of time before the trip to take care of your pet’s required
                    medical care and paperwork. Remember to start the process
                    early.
                  </h3>
                </div>
                <Row className={Style.h4TravelTagRow}>
                  <Col className={Style.h4TravelTagCol}>
                    <h3 className={Style.h3TravelTagTitle}>
                      First Stop: Your Vet’s Office
                    </h3>
                    <h4 className={Style.h4TravelTagParagraph}>
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
                      className={Style.dogWindow}
                      src={DogWindow}
                      alt="Dog w/head out window"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
            {/* TRAVEL WRAPPER */}

            {/* TRAVEL INFO WRAPPER */}
            <div className={Style.travelInfoWrapper}>
              <Container className={Style.travelInfoContainer}>
                <div className={Style.h1TravelInfoTagHeader}>
                  <h1 className={Style.h1TravelInfoTagTitle}>
                    Consider Your Pet’s Comfort
                  </h1>
                </div>
                <div className={Style.h3TravelInfoTagSubHeader}>
                  <h3 className={Style.h3TravelInfoTagSubParagraph}>
                    Loading and unloading can be the most stressful part of
                    travel for any animal. Make sure your pet is healthy enough
                    to travel. Always consult with your veterinarian first.
                  </h3>
                </div>
                <Row className={Style.h4TravelInfoTagRow}>
                  <Col>
                    <img
                      className={Style.dogInCrate}
                      src={DogCrate}
                      alt="Dog w/head out window"
                    />
                  </Col>
                  <Col className={Style.h4TravelInfoTagCol}>
                    <h3 className={Style.h3TravelInfoTagTitle}>
                      Consider These Tips:
                    </h3>
                    <h4 className={Style.h4TravelInfoTagParagraph}>
                      Get your pet used to its carrier before the flight.
                    </h4>
                    <h4 className={Style.h4TravelInfoTagParagraph}>
                      Purchase flights with fewer connections or layovers.
                    </h4>
                    <h4 className={Style.h4TravelInfoTagParagraph}>
                      Pick departure and arrival times to avoid extreme
                      temperatures.
                    </h4>
                    <h4 className={Style.h4TravelInfoTagParagraph}>
                      Walk your pet before leaving home and again before
                      checking in.
                    </h4>
                    <h4 className={Style.h4TravelInfoTagParagraph}>
                      Check in early so it can go to the quiet and dimly lit
                      hold of the plane.
                    </h4>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* TRAVEL INFO WRAPPER */}

            {/* HEALTH CERTIFICATE WRAPPER */}
            <div className={Style.healthCertificateWrapper}>
              <Container className={Style.healthCertificateContainer}>
                <div className={Style.h1healthCertificateTagHeader}>
                  <h1 className={Style.h1healthCertificateTagTitle}>
                    Health Certificate
                  </h1>
                </div>
                <div className={Style.h3healthCertificateTagSubHeader}>
                  <h3 className={Style.h3healthCertificateTagSubParagraph}>
                    A health certificate is required when shipping your pet as
                    cargo, and for all pets checked as baggage like those
                    traveling with a U.S. Military or U.S. State Department
                    Foreign Service Office Member. Your veterinarian, the U.S.
                    Department of Agriculture, or the Department of Agriculture
                    for your destination state may provide you with more
                    information.
                  </h3>
                </div>
                <Row className={Style.h4healthCertificateTagRow}>
                  <Col className={Style.h4healthCertificateTagCol}>
                    <h3 className={Style.h3healthCertificateTagTitle}>
                      Health Requirements
                    </h3>
                    <h4 className={Style.h4healthCertificateTagParagraph}>
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
                      className={Style.hikerDog}
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
          <div className={Style.footerWrapper}>
            <Container className={Style.footerContainer}>
              <Row className={Style.footerAddressRow}>
                <div id={Style.footerLogoCol} className="col-md-2">
                  <a href="/">
                    <img
                      className={Style.FooterLogo}
                      src={Logo}
                      alt="Footer MVC Logo"
                    />
                  </a>
                </div>
                <div id={Style.footerMVCTag} className="col-md-3">
                  <h5>
                    <a href="https://www.mariettavetclinic.com/">
                      Marietta Vet Clinic
                    </a>
                  </h5>
                </div>
                <div id={Style.footerMVCPhoneNumberTag} className="col-md-3">
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
                <div id={Style.footerMVCInquiryTag} className="col-md-2">
                  <h5>
                    <a href="/">INQUIRY</a>
                  </h5>
                </div>
                <div id={Style.footerMVCFAQTag} className="col-md-1">
                  <h5>
                    <a href="/">FAQ</a>
                  </h5>
                </div>
                <div id={Style.blankDiv} className="col-md-1" />
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

export default Landing;
