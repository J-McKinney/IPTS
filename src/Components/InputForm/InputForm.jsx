import React from "react";
import Container from "react-bootstrap/Container";
import Style from "./InputForm.module.css";

function InputForm(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <Container className={Style.container}>
          <div className={Style.col}>{props.title}</div>
        </Container>
      </div>
    </>
  );
}

export default InputForm;
