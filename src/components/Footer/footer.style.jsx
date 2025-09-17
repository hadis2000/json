import styled from "styled-components";
import { device } from "../madia.style";

export const Footer1 = styled.div`
  background-image: linear-gradient(to left, #00181f, #002835);
  width: 100%;
  overflow: hidden;
  font-family: "estedadM";
`;
export const Top = styled.div`
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 3px solid #ccc;
  @media ${device.tablet} {
    border-bottom: none;
  }
`;
export const Holder1 = styled.div`
  width: 50%;
  float: right;
  padding: 10px 0px;
  @media ${device.tablet} {
    width: 100%;
  }
`;
export const Title = styled.h2`
  font-size: 30px;
  color: white;
  font-weight: bold;
  font-family: "estedadBol";
  text-align: right;
  @media ${device.tablet} {
    text-align: center;
  }
`;

export const Tozih = styled.h3`
  font-size: 17px;
  color: rgb(212, 212, 212);
  direction: rtl;
  text-align: justify;
  line-height: 2;
  font-family: "estedadL";
  @media ${device.tablet} {
    width: 100%;
    text-align: center;
  }
`;

export const Holder2 = styled.div`
  width: 45%;
  float: left;
  padding: 10px;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Title1 = styled.h3`
  font-size: 32px;
  color: white;
  text-align: right;
  font-family: "estedadBol";
  @media ${device.tablet} {
    text-align: center;
  }
`;
export const HoldInput = styled.div`
  width: 95%;
  margin: 20px auto;
`;
export const Search = styled.input`
  height: 45px;
  width: 70%;
  direction: rtl;
  font-size: 13px;
  color: rgb(219, 219, 219);
  float: right;
  background-color: #01789c;
  border-radius: 0 2px 2px 0;
  border: none;
`;

export const Bottom = styled.div`
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px 0;
  @media ${device.tablet} {
    .contact {
      display: none;
    }
  }
`;
export const Hold = styled.div`
  width: 24%;
  float: right;
  margin-left: 3%;
  .iconFoo {
    font-size: 30px;
  }
  @media ${device.tablet} {
    width: 100%;
    margin-left: 0%;
  }
`;
export const HoldImg = styled.figure`
  width: 24%;
  height: 120px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #666;
  margin-right: 5%;
  float: left;
  background: #fff;
  img {
    width: 100%;
    height: 100%;
  }
  @media ${device.tablet} {
    margin-right: 0%;
    margin: 10px 4%;
  }
`;
export const Mtn = styled.div`
  width: 100%;
  background: #013747;
  color: #fff;
  font-family: "estedadM";
  text-align: center;
  padding: 13px 8px;
`;
