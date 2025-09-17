import React from "react";
import { BItems } from "./Bttn.style";

const Bttn = (props) => {
  return (
    <BItems
      type={props.type ? props.type : "submit"}
      backgrounColor={props.backColor}
      disabled={props.disabled}
      fontColor={props.fontColor}
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      onClick={props.onClick}
      customStyle={props.customStyle}
      mobileStyle={props.mobileStyle}
    >
      {props.name}
    </BItems>
  );
};

export default Bttn;
