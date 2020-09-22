import React, { Component } from "react";
// import RadioButton from "../../Components/RadioButton/RadioButton";
import InputForm from "../../Components/InputForm/InputForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Style from "./FAQ.module.css";

class FAQ extends Component {
  render() {
    return (
      <>
        <div className={Style.wrapper}>
          <Container className={Style.container}>
            <Row className={Style.row}>
              <div className="col-lg-6">
                <InputForm title="First Name" />
              </div>
              <div className="col-lg-6">
                <InputForm title="Last Name" />
              </div>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default FAQ;
