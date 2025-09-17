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
export const Text = styled.div`
  overflow: hidden;
  width: 100%;
  color: #004458;
  margin-top: 40px;
  text-align: center;
  text-shadow: 1px 1px 2px #aaa;
  h3 {
    font-family: "estedadM";
  }
  p {
    font-family: "estedadL";
    width: 70%;
    margin: 10px auto;
  }
`;

export const HolderBody = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
`;
export const HolderMap = styled.div`
  width: 80%;
  overflow: hidden;
  margin: 30px auto;
  background: #282b32;
`;
export const Circle = styled.div`
  width: 75px;
  height: 75px;
  border: 3px solid #d1d2d4;
  border-radius: 50%;
  margin: 0px auto 20px;
  .aboutIco {
    color: #d1d2d4;
    text-align: center;
    font-size: 40px;
    margin: 15px;
  }
`;
export const Matn = styled.p`
  text-align: center;
  color: #d1d2d4;
  font-family: "estedadTH";
  margin: 10px 0;
  .MatnIco {
    font-size: 30px;
  }
`;
export const HeaderMatn = styled.h4`
  text-align: center;
  color: #d1d2d4;
  font-family: "estedadM";
  margin: 20px 0;
`;
