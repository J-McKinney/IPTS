import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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
    additionalComments: "",
  };

  //
  componentWillMount() {
    console.log("WillMount, ownerFirstName: ", this.state.ownerFirstName);
    console.log("WillMount, ownerLastName: ", this.state.ownerLastName);
    // console.log("WillMount, petType: ", this.state.petType);
  }
  componentDidMount() {
    console.log("DidMount, ownerFirstName: ", this.state.ownerFirstName);
    console.log("DidMount, ownerLastName: ", this.state.ownerLastName);
    // console.log("DidMount, petType: ", this.state.petType);
  }
  componentWillUpdate() {
    console.log("WillUpdate, ownerFirstName: ", this.state.ownerFirstName);
    console.log("WillUpdate, ownerLastName: ", this.state.ownerLastName);
    // console.log("WillUpdate, petType: ", this.state.petType);
  }
  componentDidUpdate() {
    console.log("DidUpdate, ownerFirstName: ", this.state.ownerFirstName);
    console.log("DidUpdate, ownerLastName: ", this.state.ownerLastName);
    // console.log("DidUpdate, petType: ", this.state.petType);
  }
  componentWillUnmount() {
    console.log("WillUnmount, ownerFirstName: ", this.state.ownerFirstName);
    console.log("WillUnmount, ownerLastName: ", this.state.ownerLastName);
    // console.log("WillUnmount, petType: ", this.state.petType);
  }
  //

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

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
              <Form.Row>
                {/* First Name */}
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    value={this.state.ownerFirstName}
                    name="ownerFirstName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="First name"
                  />
                </Col>
                {/* First Name */}
                {/* Last Name */}
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    value={this.state.ownerLastName}
                    name="ownerLastName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last name"
                  />
                </Col>
                {/* Last Name */}
              </Form.Row>
              <br />
              {/* Type of Animal Radio Buttons */}
              <fieldset>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column sm={4}>
                    Type Of Animal:
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Check
                      //   value={this.state.petType}
                      name="Dog"
                      //   onChange={this.handleInputChange}
                      type="radio"
                      label="Dog Woof"
                      id="dogButton"
                    />
                  </Col>
                  <Col sm={4}>
                    <Form.Check
                      //   value={this.state.petType}
                      name="Cat"
                      //   onChange={this.handleInputChange}
                      type="radio"
                      label="Cat Meow"
                      id="catButton"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
              {/* Type of Animal Radio Buttons */}
              <br />
              {/* Text Area */}
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Additional Comments</Form.Label>
                <Form.Control as="textarea" rows="5" maxLength="600" />
              </Form.Group>
              {/* Text Area */}
              <br />
              {/* Submit Button */}
              <Button onClick={this.onSubmit} variant="primary" type="submit">
                Submit
              </Button>
              {/* Submit Button */}
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
