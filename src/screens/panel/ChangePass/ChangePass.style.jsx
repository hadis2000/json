import styled from "styled-components";
import { device } from "../../../components/madia.style";

export const Holder = styled.div`
  width: 70%;
  margin: 150px auto 200px;
  @media ${device.custom} {
    width: 100%;
    margin: 80px auto 130px;
  }
`;
