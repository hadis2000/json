import styled from "styled-components";
import { device } from "../../components/madia.style";

// ax back
export const Infor = styled.img`
  width: 100%;
  height: 678px;
  position: absolute;
  z-index: -2;
`;
export const S = styled.div`
  background-color: rgba(2, 2, 2, 0.492);
  height: 678px;
  width: 100%;
  position: relative;
  top: 0;
  z-index: -1;
  opacity: 0.9;
`;

// header
export const HoldHeader = styled.div`
  width: 100%;
  margin: 10px auto;
  position: absolute;
  z-index: 0;
  top: 100px;
`;
export const HoldDtail = styled.div`
  width: 45%;
  margin: 0 auto;
  overflow: hidden;
`;
export const Icon = styled.figure`
  height: 130px;
  width: 130px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;
export const Esmdore = styled.h2`
  margin: 20px auto;
  color: white;
  font-weight: bold;
  text-align: center;
  font-family: "lale";
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
`;
export const Text = styled.h3`
  width: 49%;
  float: right;
  color: white;
  font-family: "estedadL";
  font-weight: bold;
  text-align: right;
  font-size: 20px;
  @media ${device.tablet} {
    font-size: 15px;
  }
`;

// info
export const Information = styled.div`
  background-color: rgba(2, 2, 2, 0.611);
  width: 100%;
  height: 170px;
  position: absolute;
  z-index: 0;
  opacity: 0.8;
  top: 508px;
`;
export const Description = styled.div`
  height: 170px;
  width: 33.3%;
  float: right;
  border: 1px solid gray;
  font-family: "estedadL";
`;
export const TextDes = styled.h2`
  z-index: 3;
  color: white;
  font-size: 25px;
  text-align: center;
  margin-top: 3px;
  span {
    font-size: 20px;
  }
  p {
    margin-top: 50px;
  }
  @media ${device.tablet} {
    margin-top: 5%;
    font-size: 16px;
    span {
      font-size: 13px;
    }
  }
`;

// content
export const Content = styled.div`
  overflow: hidden;
  background-color: white;
  position: relative;
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
  width: 30%;
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
export const PriceCourse = styled.p`
  font-family: "estedadM";
  color: #025763;
  font-weight: 500;
  overflow: hidden;
  .mtn {
    float: right;
  }
  .main {
    float: right;
    font-weight: 500;
    color: #003e50;
  }
  .mainPrice {
    float: left;
    color: #069082;
  }
  .pri {
    float: left;
  }
  .off {
    float: left;
    color: red;
  }
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
