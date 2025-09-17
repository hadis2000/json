import styled from "styled-components";

export const Holder = styled.div`
  width: 190px;
  height: 28px;
  border-radius: 2px;
  background: ${(props) => (props.bgColor ? props.bgColor : "#ccc")};
  ${(props) => props.custom}
`;
export const Percent = styled.div`
  height: 100%;
  width: ${(props) => props.precent}%;
  background: ${(props) => (props.backColor ? props.backColor : "#004458")};
  color: ${(props) => (props.fontColor ? props.fontColor : "#fff")};
  text-align: left;
  line-height: 28px;
  text-indent: 10px;
`;
