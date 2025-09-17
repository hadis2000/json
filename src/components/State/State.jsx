import React from "react";
import { Holder, Percent } from "./State.style";

const State = (props) => {
  const { capacity, countStu } = props;
  // const per=100-(Math.floor(remainingCapacity*100/initialCapacity)) ;
  const per = Math.floor((100 * countStu) / capacity);
  return (
    <Holder custom={props.custom} bgColor={props.bgColor}>
      <Percent
        precent={per}
        fontColor={props.fontColor}
        backColor={props.backColor}
      >
        {per}%
      </Percent>
    </Holder>
  );
};

export default State;
