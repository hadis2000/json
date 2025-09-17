import styled from "styled-components";
import { device } from "../../components/madia.style";

export const Holder = styled.div`
  width: 1700px;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  font-size: 30px;
  @media ${device.desktop} {
    height: 100vh;
    width: 100%;
    font-size: 16px;
  }
  @media ${device.tablet} {
    height: auto;
  }
`;
