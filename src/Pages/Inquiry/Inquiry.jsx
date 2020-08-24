import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Style from "./Inquiry.module.css";

class Inquiry extends Component {
  state = {
    ownerFirstName: "",
    ownerLastName: "",
    // homeCountry: "",
    // homeState: "",
    // homeCity: "",
    // homeZip: "",
    // contactNumber: "",
    // emailAddress: "",
    // activeMilitary: false,
    // petName: "",
    // petAge: 0,
    petType: "",
    // petBreed: "",
    // petGender: "",
    // petWeight: 0,
    // travelCrate: false,
    // petDepartureCity: "",
    // petDepartureState: "",
    // petDepartureCountry: "",
    // petArrivalCity: "",
    // petArrivalState: "",
    // petArrivalCountry: "",
    additionalComments: "",
  };

  componentDidMount() {}
  componentDidUpdate() {}

  handleInputChange = (e) => {
    const { name, value } = e.target;
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
          <Container className={Style.formContainer}>
            <h5 className={Style.ownerInfoHeaderTag}>Owner Information:</h5>
            <Form>
              <br />
              <Form.Row className={Style.ownerInfoFormRow}>
                <Col className={Style.ownerInfoFirstNameCol}>
                  {/* First Name */}
                  <Form.Label className={Style.firstNameTag}>
                    First Name
                  </Form.Label>
                  <Form.Control
                    className={Style.ownerInfoFirstNameFormControl}
                    value={this.state.ownerFirstName}
                    name="ownerFirstName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="First name"
                  />
                </Col>
                {/* First Name */}
                {/* Last Name */}
                <Col className={Style.ownerInfoLastNameCol}>
                  <Form.Label className={Style.lastNameTag}>
                    Last Name
                  </Form.Label>
                  <Form.Control
                    className={Style.ownerInfoLastNameFormControl}
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
              <fieldset className={Style.petTypeFieldset}>
                <Form.Group as={Col}>
                  <Form.Label as="legend" className={Style.animalTypeFormLabel}>
                    Type Of Animal:
                  </Form.Label>
                  <Row>
                    <Col>
                      <Form.Check
                        checked={this.state.petType === "Dog"}
                        value="Dog"
                        onChange={this.handleInputChange}
                        type="radio"
                        label="Dog"
                        name="petType"
                        className={Style.dogRadioButton}
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        checked={this.state.petType === "Cat"}
                        value="Cat"
                        onChange={this.handleInputChange}
                        type="radio"
                        label="Cat"
                        name="petType"
                        className={Style.catRadioButton}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </fieldset>
              {/* Type of Animal Radio Buttons */}
              <br />
              {/* Text Area */}
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Additional Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  maxLength="600"
                  value={this.state.additionalComments}
                  name="additionalComments"
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              {/* Text Area */}
              <br />
              {/* Submit Button */}
              <Button
                className={Style.submitButton}
                onClick={this.onSubmit}
                variant="primary"
                type="submit"
              >
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
