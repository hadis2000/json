import styled from "styled-components";
import { device } from "../../madia.style";

export const Holder = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const Left = styled.div`
  width: 55%;
  height: 500px;
  float: left;
  position: relative;
  @media ${device.desktop} {
    width: 60%;
  }
  @media ${device.custom} {
    width: 100%;
    height: 300px;
  }
`;
export const Slider = styled.div`
  width: 75%;
  margin: 100px auto;
  position: relative;
  box-shadow: 1px 1px 5px #ccc;
  @media ${device.custom} {
    width: 90%;
    margin: 0px auto;
  }
`;
export const SliderMatn = styled.h5`
  padding: 20px;
  background: #004358;
  opacity: 0.7;
  direction: rtl;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0px;
  width: 100%;
  font-family: "estedadM";
`;
export const Right = styled.div`
  width: 39%;
  height: 500px;
  float: right;
  position: relative;

  @media ${device.custom} {
    width: 95%;
    font-size: 13px;
  }
`;
export const Bordr = styled.div`
  width: 100%;
  height: 80%;
  border-bottom: 2px solid #d1d1d1;
  border-right: 2px solid #d1d1d1;
  border-left: 2px solid #d1d1d1;
  border-top: 1px solid transparent;
  border-radius: 2px;
  box-shadow: 0.05px 0.05px 5px #ccc;
  h2 {
    font-weight: bold;
    color: #002a42;
    font-size: 35px;
    text-align: right;
    margin: 50px 30px 0 0;
    font-family: "estedadBol";
    @media ${device.custom} {
      margin: 90px 30px 0 0;
    }
    @media ${device.mobile} {
      margin: 50px 30px 0 0;
    }
  }
`;
export const Matn = styled.p`
  color: #5a5a5a;
  font-size: 20px;
  width: 90%;
  direction: rtl;
  text-align: justify;
  line-height: 30px;
  margin: 20px auto;
  font-family: "estedadL";
`;

export const Text = styled.p`
  color: #aaa;
  text-align: center;
  margin: 40px 0;
`;
