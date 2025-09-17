import styled,{css} from "styled-components";
import { device } from "../../madia.style";

export const Holder=styled.div`
    width: 100%;
    height: 570px;
`;
export const HolderOption=styled.div`
    width: 100%;
    height: 33.3%;
    :nth-child(1),:nth-child(3){
        background: #004458;
    }
    :nth-child(2){
        background-image: linear-gradient(to right, #004458 , #0CDBAB);
    }
    div{
        @media ${device.tablet} {
            width: 100%;
            font-size: 16px;
        }
        @media ${device.mobile} {
            font-size: 13px;
            margin-right: 10px;
        }
    }
    figure{
        @media ${device.tablet} {
            display: none;
        }
    }
`;
const Axe=css`
    width: 40%;
    height: 100%;
    margin: 0;
    img{
        width: 100%;
        height: 100%;
    }
`;
export const Ax1=styled.figure`
    float: left;
    position: relative;
    ${Axe};
    div{
        border-bottom: 190px solid #004358;
        opacity: 70%;
        border-right: 185px solid transparent;
        @media ${device.laptop} {
        border-right: 115px solid transparent;
        }
        float: right;
        height: 0;
        width: 130%;
        position: absolute;
        top:0;
        left: 0;
        a{
            margin-top: 70px;
        }
    }
`;
export const Ax2=styled.figure`
    ${Axe};
    float: right;
`;
const Matn=css`
    width: 40%;
    height: 100%;
    color: #fff;
    text-align: right;
    margin-right: 100px;
    font-size: 20px;
    h2{
        margin-top: 50px;
        font-family: 'estedadBol';
    } 
    p{
        font-family: 'estedadM';
    }
`;
export const Mtn1=styled.div`
    ${Matn};
    float: right;
`;
export const Mtn2=styled.div`
    ${Matn};
    float: left;
    @media ${device.tablet} {
        float: right;
    }
`;
