import styled from "styled-components";
import { device } from "../../madia.style";

export const Header=styled.h4`
    color: #088568;
    width: 100%;
    margin: 10px auto 30px;
    text-align: right;
    padding: 10px 0;
    border-bottom: 1px solid #088568;
    font-size: 20px;
    font-family: 'estedadM';
    @media ${device.tablet} {
        font-size: 18px;
        text-align: center;
    }
`;