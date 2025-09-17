import styled from "styled-components";
import { device } from "../../../components/madia.style";

export const Holder = styled.div`
  padding-bottom: 0px;
  @media ${device.custom} {
    padding-bottom: 50px;
  }
`;
export const Right = styled.div`
  width: 46%;
  overflow: hidden;
  float: right;
  @media ${device.custom} {
    width: 100%;
    padding-top: 0px;
  }
`;
export const Left = styled.div`
  width: 46%;
  float: left;
  .birth {
    margin-bottom: 14px;
  }
  @media ${device.custom} {
    width: 100%;
    padding-top: 0px;
  }
`;
export const HolderBtn = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 60px;
  @media ${device.custom} {
    margin-bottom: 0px;
  }
`;
export const InputText = styled.p`
  text-align: right;
  font-size: 15px;
  color: #aaa;
  font-family: "estedadM";
  margin-bottom: -10px;
`;
export const InputChoice = styled.input`
  width: 100%;
  margin: 20px 0;
  border: none;
  background: #eee;
  padding: 10px;
  border-radius: 3px;
  text-align: right;
  font-family: "estedadM";
  color: #003e50;
  ::placeholder {
    color: #003e50;
  }
  :hover {
    border-bottom: 2px solid #003e50;
  }
`;
