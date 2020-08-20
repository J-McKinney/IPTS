import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// Form Control
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import FormCheck from "react-bootstrap/FormCheck";
// import FormFile from "react-bootstrap/FormFile";
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

  onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Document");
  };

  render() {
    return (
      <>
        {/* Form Wrapper */}
        <div className={Style.wrapper}>
          {/* Form Container */}
          <Container className={Style.ownerInfoContainer}>
            <Form>
              <br />
              {/* First Name */}
              <Form.Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="First name" />
                </Col>
                {/* Last Name */}
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Form.Row>
              <br />
              {/* Type Of Animal */}
              <Form.Row>
                <Form.Label>Type Of Animal</Form.Label>
              </Form.Row>
              <Form.Row>
                {/* Cat??? */}
                <Col>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Cat: Meow" />
                  </Form.Group>
                </Col>
                {/* Dog??? */}
                <Col>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Dog: Woof" />
                  </Form.Group>
                </Col>
              </Form.Row>
              <br />
              {/* Text Area */}
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Additional Comments</Form.Label>
                <Form.Control as="textarea" rows="5" maxLength="600" />
              </Form.Group>
              <br />
              <Button onClick={this.onSubmit} variant="primary" type="submit">
                Submit
              </Button>
              <br />
              {/* End Of Form */}
            </Form>
          </Container>
        </div>
      </>
    );
  }
}

export default Inquiry;
