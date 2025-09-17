import styled from "styled-components";
import { device } from "../madia.style";

export const Holder = styled.div`
  width: 36.5%;
  height: 100%;
  float: ${(props) => (props.state ? "left" : "right")};
  @media ${device.custom} {
    width: 44.5%;
  }
  @media ${device.tablet} {
    width: 100%;
    float: none;
  }
`;
export const Header = styled.div`
  margin: ${(props) => (props.stat ? "0px 30px -30px" : "120px 20px 10px")};
  text-align: right;
  font-size: 40px;
  color: #004458;
  font-family: "estedadBol";
  @media ${device.desktop} {
    margin: ${(props) => (props.stat ? "0px 30px 0px" : "120px 20px 10px")};
  }
  @media ${device.tablet} {
    font-size: 35px;
    font-weight: 500;
    margin: ${(props) => (props.stat ? "0px 30px 0px" : "10px 20px 10px")};
  }
`;
export const HeaderF = styled.div`
  margin: 225px 20px 0px;
  text-align: right;
  font-size: 40px;
  color: #004458;
  font-family: "estedadBol";
  @media ${device.tablet} {
    font-size: 35px;
    font-weight: 500;
  }
`;
export const InputHolder = styled.div`
  width: 90%;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  padding: 20px 0;
`;
export const Chek = styled.div`
  float: right;
  font-family: "estedadL";
`;
export const Forget = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 30px;
  font-family: "estedadL";
  @media ${device.desktop} {
    font-size: 16px;
  }
`;
export const Sp = styled.span`
  color: #00435886;
  font-family: "estedadL";
  font-size: 18px;
  display: inline-block;
  padding: 10px 20px;
  overflow: hidden;
  margin: 0px 10px;
  border-radius: 5px;
  :hover {
    color: #fff;
    cursor: pointer;
    background: #004458;
    box-shadow: 1px 1px 5px #ccc;
  }
`;
export const DateBox = styled.div`
  width: 100%;
  position: relative;
  margin: 20px 0;
`;

export const LoginEmp = styled.h5`
  margin: 20px 28px;
  color: #004458;
  text-decoration: underline;
  cursor: pointer;
  font-family: "estedadM";
`;
