import React from "react";
import { InputBox } from "./inputMain.style";
import { Field, ErrorMessage } from "formik";
import Overlay from "../overlay/Overlay";

const InputMain = (props) => {
  return (
    <InputBox>
      <ErrorMessage
        name={props.name}
        render={(msg) => <Overlay>{msg}</Overlay>}
      ></ErrorMessage>
      <Field
        type={props.typ}
        placeholder={props.children ? " : " + props.children : ""}
        name={props.name}
        id={props.name}
      />
    </InputBox>
  );
};

export default InputMain;
