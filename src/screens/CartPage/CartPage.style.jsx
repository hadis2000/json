import styled from "styled-components";
import { device } from "../../components/madia.style";

export const HoldHeader = styled.div`
  width: 100%;
  height: 70px;
  overflow: hidden;
  img {
    width: 100%;
    @media ${device.custom} {
      height: 100%;
    }
  }
`;
export const HoldBody = styled.div`
  width: 100%;
  overflow: hidden;
  font-family: "estedadM";
  .headerCart {
    text-align: center;
    font-family: "estedadBol";
    font-size: 25px;
    text-shadow: 1px 1px 2px #004458;
  }
  .rowCart {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 18px;
    color: red;
  }
  .colCart {
    text-align: right;
    font-size: 20px;
    font-family: "estedadBol";
    color: #004458;
  }
  .cartImg {
    img {
      width: 100%;
      height: 110px;
      border-radius: 10px;
    }
  }
  .deleteCartShopping {
    text-align: left;
    color: red;
    font-size: 30px;
    margin-top: -15px;
    .icondelC {
      cursor: pointer;
    }
  }
  .CartText {
    direction: rtl;
    span {
      font-size: "estedadBol";
      font-size: 20px;
    }
  }
`;
export const CartEmpty = styled.div`
  width: 100%;
  text-align: center;
  font-family: "estedadBol";
  color: #004458;
  img {
    width: 400px;
  }
`;
