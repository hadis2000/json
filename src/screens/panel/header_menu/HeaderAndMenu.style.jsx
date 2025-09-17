import styled from "styled-components";
import { device } from "../../../components/madia.style";

export const Holder=styled.div`
    background: #DBDBDB;
    width: 1900px;
    overflow: hidden;
    margin: 0 auto;
    font-size: 25px;
    @media ${device.desktop} {
        width: 100%;
        font-size: 16px;
    }
`;
export const HolderLeft=styled.div`
    width: 75%;
    float: left;
    @media ${device.tablet} {
        width: 100%;
    }
`;
export const Contain=styled.div`
    width: 95%;
    overflow: hidden;
    background: #fff;
    margin: 10px auto;
    padding:20px 30px;
`;