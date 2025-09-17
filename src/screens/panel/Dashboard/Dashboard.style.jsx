import styled from "styled-components";
import { device } from "../../../components/madia.style";

export const Holder = styled.div`
  margin-bottom: 20px;
`;
export const Right = styled.div`
  width: 46%;
  float: right;
  @media ${device.custom} {
    width: 100%;
  }
`;
export const Info = styled.div`
  width: 100%;
  overflow: hidden;
  background: #f1f1f1;
  text-align: right;
  color: #004458;
  position: relative;
  padding-bottom: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #ccc;
  @media ${device.mobile} {
    font-size: 10px;
  }
`;
export const InfoMatn = styled.p`
  margin: 18px;
  overflow: hidden;
`;
export const InfoTitle = styled.span`
  float: right;
  font-family: "estedadBol";
  font-size: 22px;
`;
export const InfoText = styled.span`
  float: right;
  font-family: "estedadL";
  font-size: 18px;
  padding: 0 5px;
`;
export const Left = styled.div`
  width: 50%;
  overflow: hidden;
  @media ${device.custom} {
    width: 100%;
  }
`;
export const Message = styled.p`
  font-family: "estedadM";
  text-align: center;
  color: #aaa;
`;
