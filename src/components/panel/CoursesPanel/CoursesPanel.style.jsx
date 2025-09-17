import styled from "styled-components";
import { device } from "../../madia.style";

export const Holder=styled.div`
    width: 100%;
    height: 100px;
    overflow: hidden;
    float: right;
    margin: 0px 0 30px;
    background: #F1F1F1;
    position: relative;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #ccc;
    :hover > img{
        transition: 0.5s;
        width: 33%;
        filter: brightness(0.5);
    }
    :hover > div{
        transition: 0.5s;
        display: block;
    }
`;
export const ImageP=styled.img`
    width: 30%;
    height: 99.8%;
    float: right;
`;
export const HoverHolder=styled.div`
    transition: 0.5s;
    display: none;
    width: 35%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
`;
export const MatnP=styled.p`
    overflow: hidden;
    width: 65%;
    margin: 15px auto;
    color: #004458;
    text-align: right;
    font-size: 15px;
    font-family: 'estedadM';
    span{
        float: left;
        color: #0CDBAB;
        font-family: 'estedadM';
    }
    @media ${device.tablet} {
        font-size: 10px;
    }
`;