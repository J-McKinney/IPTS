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
    // homeCity: "",
    // homeState: "",
    // homeZip: "",
    // homeCountry: "",
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

  //
  componentDidMount() {
    console.log("DidMount, ownerFirstName: ", this.state.ownerFirstName);
    console.log("DidMount, ownerLastName: ", this.state.ownerLastName);
    console.log("DidMount, petType: ", this.state.petType);
  }
  componentDidUpdate() {
    console.log("DidUpdate, ownerFirstName: ", this.state.ownerFirstName);
    console.log("DidUpdate, ownerLastName: ", this.state.ownerLastName);
    console.log("DidUpdate, petType: ", this.state.petType);
  }
  //

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
                  <Form.Label as="legend" column sm={1}>
                    Type Of Animal:
                  </Form.Label>
                  <Col sm={2}>
                    <Form.Check
                      // onClick={this.setState({ petType: "Dog" })}
                      // value={this.state.petType}
                      // onChange={this.handleInputChange}
                      type="radio"
                      label="Dog"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      // onClick={this.setState({ petType: "Cat" })}
                      // value={this.state.petType}
                      // onChange={this.handleInputChange}
                      type="radio"
                      label="Cat"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
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
