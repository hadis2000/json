import styled, { css } from "styled-components";
import { device } from "../../madia.style";

export const Holder = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const Right = styled.div`
  width: 55%;
  height: 560px;
  float: right;
  position: relative;
  @media ${device.desktop} {
    width: 60%;
  }
  @media ${device.custom} {
    width: 100%;
  }
`;
export const Square = styled.div`
  width: 340px;
  height: 340px;
  border: 2px solid #09b28b;
  position: absolute;
  top: 90px;
  left: 150px;
  border-radius: 2px;
`;
const constStyle = css`
  text-align: center;
  font-family: tahoma;
  position: absolute;
  border-radius: 5px;
  font-family: "lale";
  box-shadow: 1px 1px 5px #666;
`;
export const JSitem = styled.div`
  ${constStyle};
  line-height: 180px;
  font-size: 100px;
  width: 190px;
  height: 240px;
  background: #f7df1e;
  color: #000;
  top: 50px;
  left: 60px;
`;
export const Citem = styled.div`
  ${constStyle};
  font-size: 60px;
  line-height: 85px;
  width: 240px;
  height: 140px;
  background: #6a1577;
  color: #fff;
  top: 100px;
  left: 280px;
`;
export const BOitem = styled.div`
  ${constStyle};
  font-size: 30px;
  line-height: 130px;
  width: 170px;
  height: 190px;
  background: #cab2ef;
  color: #7c3d72;
  top: 320px;
  left: 80px;
`;
export const JAitem = styled.div`
  ${constStyle};
  font-size: 50px;
  line-height: 130px;
  width: 200px;
  height: 200px;
  background: #555;
  color: #61dafb;
  top: 270px;
  left: 280px;
`;
export const Left = styled.div`
  width: 39%;
  height: 560px;
  float: left;
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
    font-family: "estedadBol";
    margin: 50px 30px 0 0;
    @media ${device.tablet} {
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
