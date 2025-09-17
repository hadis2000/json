import styled from "styled-components";
import myImage from "../../../assets/img/login.png";
import { device } from "../../madia.style";

export const Back = styled.div`
  width: 63%;
  height: 100%;
  float: ${(props) => (props.direc === "left" ? props.direc : "right")};
  background: url(${myImage}) no-repeat 50% 50%;
  background-size: 100% 100%;
  @media ${device.custom} {
    width: 55%;
  }
  @media ${device.tablet} {
    width: 100%;
    /* height: 300px; */
  }
`;
export const Holder = styled.div`
  width: 80%;
  height: auto;
  overflow: hidden;
  margin: 200px auto 282px;
  font-size: 30px;
  text-align: center;
  color: #fff;
  @media ${device.tablet} {
    margin: 70px auto;
    font-size: 22px;
    width: 60%;
  }
`;
export const Academi = styled.div`
  border-bottom: 2px solid #fff;
  padding-bottom: 18px;
  font-family: "lale";
  width: 100%;
`;
export const Addr = styled.span`
  width: 24%;
  display: inline-block;
  color: #fff;
  padding-top: 18px;
  @media ${device.tablet} {
    display: none;
  }
`;
export const HomeIco = styled.span`
  display: block;
  width: 40px;
  margin: 10px auto;
  color: #fff;
  font-size: 38px;
  :hover {
    color: #004458;
  }
`;
