import styled,{keyframes} from "styled-components";
import { device } from "../madia.style";

const anim2=keyframes`
	0%{
		opacity: 0;
		transform: scale(0) rotate(720deg);
	}
	70%{
		opacity: 1;
		transform: scale(1.2) rotate(0deg);
	}
`;
export const NewsItem=styled.div`
    width:  ${(props)=>props.width?props.width:"45%"};
    height: 140px;
    overflow: hidden;
    float: right;
    margin: 10px 2%;
    background: #fff;
    position: relative;
    font-size: 13px;
    animation: ${anim2} 2s;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #ccc;
    :hover > img{
        transition: 0.5s;
        width: 35%;
        filter: brightness(0.5);
    }
    :hover > div{
        transition: 0.5s;
        display: block;
    }
    @media ${device.tablet} {
        width: 90%;
    }
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
export const NewsImg=styled.img`
    width: 30%;
    height: 99.8%;
    float: right;
    transition: 0.2s;
`;
export const Matn=styled.p`
    width: 55%;
    overflow: hidden;
    text-align: right;
    float: right;
    color: #004458;
    line-height: 30px;
    margin: 2%;
    font-family: 'estedadL';
    font-size: 18px;
`;
export const Label=styled.label`
    margin: 10px;
    background: #DCF8F1;
    color: #088568;
    width: 80px;
    padding: 3px;
    text-align: center;
    float: right;
    font-family: 'estedadTH';
    border-radius: 3px;
`;