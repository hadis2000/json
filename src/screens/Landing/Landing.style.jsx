import styled from "styled-components";
import { device } from "../../components/madia.style";

export const Holder = styled.div`
  width: 1900px;
  overflow: hidden;
  margin: 0 auto;
  font-size: 25px;
  font-family: "estedadM";
  position: relative;
  @media ${device.desktop} {
    width: 100%;
    font-size: 16px;
  }
`;
export const Up = styled.div`
  width: 60px;
  height: 60px;
  line-height: 60px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 1px 1px 5px #666;
  position: fixed;
  top: 82vh;
  right: 10px;
  text-align: center;
  font-size: 30px;
  color: #004458;
  cursor: pointer;
`;
