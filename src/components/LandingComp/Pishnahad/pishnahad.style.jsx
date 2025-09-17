import styled from "styled-components";
import { device } from "../../madia.style";

export const Pishnahadat = styled.div`
  width: 100%;
  height: 350px;
  background-image: linear-gradient(to top, #036a6d, #003e50);
  margin: 20px 0 0 0;

  border: none;
  @media ${device.tablet} {
    width: 100%;
    margin-top: 20px;
    background-image: linear-gradient(to top, #003e50, #036a6d);
  }
`;
export const Holder = styled.div`
  float: left;
  width: 51%;
  @media ${device.tablet} {
    width: 100%;
  }
  .holderP {
    position: relative;
    overflow: hidden;
    width: 80%;
    float: right;
    margin: 10px 10%;
  }
  .emailP {
    height: 40px;
    width: 100%;
    float: right;
    border: none;
    background-image: linear-gradient(to right, #56b3a9, #069082);
    color: #fff;
    cursor: pointer;
    text-align: right;
    font-family: "estedadL";
    border-radius: 10px;
    box-shadow: 1px 1px 7px #444;
    :hover {
      border-bottom: 1px solid white;
    }
  }

  .Matn {
    height: 100px;
    width: 100%;
    float: right;
    border: none;
    background-image: linear-gradient(to right, #56b3a9, #069082);
    color: #fff;
    cursor: pointer;
    text-align: right;
    border-radius: 10px;
    box-shadow: 1px 1px 7px #444;
    font-size: 20px;
    margin-bottom: 20px;
    :hover {
      border-bottom: 1px solid white;
    }
  }
`;
export const Title = styled.h2`
  color: white;
  padding: 20px 0 0 0;
  font-weight: bold;
  text-align: center;
  font-family: "estedadBol";
`;

export const Axs = styled.img`
  width: 48%;
  height: 350px;
  float: right;
  @media ${device.tablet} {
    display: none;
  }
`;
