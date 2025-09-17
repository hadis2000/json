import styled from "styled-components";
import { device } from "../../components/madia.style";

export const Holder=styled.div`
    width: 1900px;
    overflow: hidden;
    margin: 0 auto;
    font-size: 25px;
    position: relative;
    @media ${device.desktop} {
        width: 100%;
        font-size: 16px;
    }
`;