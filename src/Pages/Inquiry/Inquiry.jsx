import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Form Control
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import FormFile from "react-bootstrap/FormFile";
// Form Control
import Style from "./Inquiry.module.css";

class Inquiry extends Component {
  state = {
    ownerFirstName: "",
    ownerLastName: "",
    homeCity: "",
    homeState: "",
    homeZip: "",
    homeCountry: "",
    contactNumber: "",
    emailAddress: "",
    activeMilitary: false,
    petName: "",
    petAge: 0,
    petType: "",
    petBreed: "",
    petGender: "",
    petWeight: 0,
    travelCrate: false,
    petDepartureCity: "",
    petDepartureState: "",
    petDepartureCountry: "",
    petArrivalCity: "",
    petArrivalState: "",
    petArrivalCountry: "",
  };

  componentDidMount() {
    console.log("componentDidMount: ");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: ");
  }

  render() {
    return (
      <>
        <div className={Style.wrapper}>
          <Container className={Style.ownerInfoContainer}>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Form.Row>
            </Form>
          </Container>
        </div>
      </>
    );
  }
}

export default Inquiry;
