import styled,{ keyframes} from 'styled-components';
import { device } from '../../madia.style';

const Color=(props)=>props.fontColor?props.fontColor:"#004458";

export const BtnForm = styled.button`
    border: none;
    background: transparent;
    position: relative;
    display:block;
    padding: 10px 20px;
    border-radius: 5px;
    color: ${Color};
    font-size:${(props)=>props.fontSize?props.fontSize:"25px"};
    @media ${device.laptop} {
        font-size: ${(props)=>props.fontSize?props.fontSize:"13px"};
    }
    font-family: 'estedadM';
    text-decoration: none;
    overflow: hidden;
    transition: 0.5s;
    margin:${(props)=>props.Mrg};
    ${(props)=>props.customStyle};

    :hover{
        background: ${Color};
        color:${(props)=>props.fontColor?"#004458":"#fff"};
        border-radius: 5px;
        box-shadow: 0 0 10px ${Color};
    }
`;
export const btnAnim1 =keyframes`
    0%{
        left: -100%;
    }
    50%,
    100%{
        left: 100%;
    }
`;
const btnAnim2 = keyframes`
    0%{
        top: -100%;
    }
    50%,
    100%{
        top: 100%;
    }
`;
const btnAnim3 = keyframes`
    0%{
        right: -100%;
    }
    50%,
    100%{
        right: 100%;
    }
`;
const btnAnim4 = keyframes`
    0%{
        bottom: -100%;
    }
    50%,
    100%{
        bottom: 100%;
    }
`;
export const Spn = styled.span`
    position: absolute;
    display: block;
    :nth-child(1){
        top:0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg,transparent, ${Color});
        animation: ${btnAnim1} 1s linear infinite ;;
    }
    :nth-child(2){
        top:-100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg,transparent ,${Color});
        animation: ${btnAnim2} 1s linear infinite;
        animation-delay: 0.25s;
    }
    :nth-child(3){
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg,transparent ,${Color});
        animation: ${btnAnim3} 1s linear infinite;
        animation-delay: 0.5s;
    }
    :nth-child(4){
        bottom:-100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg,transparent ,${Color});
        animation: ${btnAnim4} 1s linear infinite;
        animation-delay: 0.75s;
    }
`;
