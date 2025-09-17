import styled from "styled-components";
import {device} from '../../madia.style';

export const BItems=styled.button`
        display: block;
        border: none;
        border-radius: 10px;
        box-shadow: 1px 1px 7px #555;
        font-family: 'estedadL';
        width: ${(props)=>props.width?props.width:"150px"};
        height:${(props)=>props.height?props.height:"50px"};
        line-height: ${(props)=>props.height?props.height:"50px"};
        text-align: center;
        background: ${(props)=>props.backgrounColor?props.backgrounColor:"linear-gradient(to right, #45ABA0,#003E50)"};
        color: ${(props)=>props.fontColor?props.fontColor:"#fff"};
        font-size:${(props)=>props.fontSize?props.fontSize:"15px"};
        margin: ${(props)=>props.margin?props.margin:"0 auto"};
        ${(props)=>props.customStyle};
        cursor: pointer;
        :hover{
                background: ${(props)=>props.backgrounColor?props.backgrounColor:"linear-gradient(to left, #45ABA0,#003E50)"};
                font-weight:600;
        }
        @media ${device.tablet} {
          ${(props)=>props.mobileStyle};
        }
`;
