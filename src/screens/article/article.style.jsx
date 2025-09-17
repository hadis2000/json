import styled from "styled-components";
import { device } from "../../components/madia.style";

//ax
export const Back = styled.img`
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 678px;
  @media ${device.tablet} {
    width: 600px;
    height: 350px;
  }
`;
export const Mask = styled.div`
  width: 100%;
  height: 678px;
  background-color: rgb(49, 49, 49);
  position: relative;
  opacity: 0.65;
  z-index: -1;
  @media ${device.tablet} {
    width: 600px;
    height: 350px;
  }
`;

//header
export const HoldHeader = styled.div`
  width: 100%;
  margin: 200px auto;
  position: absolute;
  z-index: 0;
  top: 100px;
  @media ${device.tablet} {
    margin: 50px auto;
  }
`;
export const HoldDtail = styled.div`
  width: 60%;
  margin: 0 auto;
  overflow: hidden;
`;
export const Esmdore = styled.h2`
  margin: 20px auto;
  color: white;
  font-weight: bold;
  text-align: center;
  font-family: "lale";
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
  @media ${device.tablet} {
    font-size: 19px;
  }
`;
export const Grid = styled.p`
  color: white;
  text-align: right;
  font-family: "estedadL";
  width: 49%;
  float: right;
`;
export const Like = styled.p`
  color: white;
  text-align: left;
  font-family: "estedadL";
  width: 49%;
  float: left;
`;

//content
export const Contetnt = styled.div`
  overflow: hidden;
  position: relative;
  padding: 50px 0;
`;
//right
export const Detalis = styled.div`
  width: 60%;
  float: right;
  padding: 30px 0;
  @media ${device.tablet} {
    width: 100%;
  }
  .tozih {
    font-family: "lale";
    font-size: 30px;
    color: #003e50;
    text-shadow: 1px 1px 5px #ccc;
  }
`;
export const Cudets = styled.p`
  direction: rtl;
  text-align: justify;
  font-family: "estedadM";
  padding: 0 30px;
  line-height: 35px;
  font-size: 18px;
`;
//left
export const MOshakhsat = styled.div`
  float: left;
  margin: 90px 20px 20px;
  padding: 20px;
  width: 35%;
  overflow: hidden;
  background: #eee;
  border-radius: 5px;
  @media ${device.tablet} {
    float: none;
    clear: both;
    width: 90%;
    margin: 20px auto;
  }
`;
export const Namedore = styled.h4`
  font-family: "estedadM";
  text-align: center;
  color: #003e50;
  padding: 5px;
  border-bottom: 2px solid #003e50;
`;

//Comment
export const Comments = styled.div``;
export const Matn = styled.p`
  text-align: center;
  font-family: "estedadM";
  font-size: 18px;
  color: #aaa;
  margin-top: 80px;
`;
