import styled from "styled-components";

export const HoldItem = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #aaa;
  overflow: hidden;
  margin: 10px 0;
  cursor: pointer;
  img {
    width: 80px;
    height: 100%;
    float: right;
  }
`;
export const HoldText = styled.div`
  float: right;
`;
export const Title = styled.h5`
  color: #069082;
  text-align: right;
  padding: 5px;
  font-size: 18px;
  font-family: "estedadM";
  overflow: hidden;
  span {
    float: right;
  }
  .h {
    font-size: 15px;
    font-family: "estedadL";
  }
`;
export const Text = styled.p`
  color: #aaa;
  text-align: right;
  padding: 5px;
  font-size: 14px;
  span {
    font-size: 16px;
  }
`;
