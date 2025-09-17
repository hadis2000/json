import styled from "styled-components";
import { device } from "../../components/madia.style";

export const Holder = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background: #e9e9e9;
  margin: 0 auto;
  font-size: 25px;
  @media ${device.desktop} {
    width: 100%;
    font-size: 16px;
  }
`;
export const ImageHeader = styled.img`
  width: 100%;
  height: 70px;
`;
export const Header = styled.h2`
  color: #004458;
  text-align: center;
  margin: 20px 0;
  font-size: 40px;
  font-family: "lale";
  text-shadow: 1px 1px 5px #ccc;
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 30px;
  }
`;
export const MenuHolder = styled.div`
  width: 90%;
  overflow: hidden;
  margin: 10px auto;
  border-bottom: 1.5px solid #004458;
  font-family: "estedadM";
  font-size: 20px;
  color: #004458;
  .select {
    border-bottom: 2px solid #004458;
    font-weight: bold;
  }
`;
export const Option = styled.div`
  float: right;
  width: 50%;
  overflow: hidden;
  text-align: center;
  padding-bottom: 10px;
  cursor: pointer;
`;

export const HolderOption = styled.div`
  width: 90%;
  overflow: hidden;
  margin: 0 auto;
`;
export const Text = styled.h2`
  color: #004458;
  text-align: center;
  margin: 100px auto;
  font-size: 60px;
  font-family: "estedadM";
`;

export const SelecPageSize = styled.select`
  float: left;
  text-align: center;
  background: #fff;
  color: #036a6d;
  font-weight: 600;
  border-radius: 5px;
  padding: 3px 0;
  font-family: "estedadM";
  @media ${device.custom} {
    float: none;
    width: 100%;
  }
`;
export const Count = styled.p`
  color: #1d9a8d;
  text-align: right;
  line-height: 200%;
  font-size: 20px;
  font-family: "estedadL";
  @media ${device.custom} {
    font-size: 17px;
    text-align: center;
  }
`;
