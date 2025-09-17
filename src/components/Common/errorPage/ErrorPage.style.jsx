import styled,{keyframes} from "styled-components";

export const HoldError = styled.div`
    padding:100px 30px;
    font-size: 85px;
    font-family:cursive;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 80px red , 0 0 30px firebrick,0 0 6px darkred;
    color: red;
    background: #000;
`;

const upper=keyframes`
    0%,19.999%,22%,62.999%,64%,64.999%,70%,100%{
        opacity: 0.99;
        text-shadow: 0 0 80px #ffffff,0 0 30px #008000,0 0 6px #0000ff;
    }
    20%,21.999%,63%,63.999%,65%,69.999%{
        opacity:0.4;
        text-shadow:none;
    }
`;
export const ErorrMessage = styled.p`
    margin: 5px;
    color: #fff;
    text-shadow: 0 0 80px #ffffff,0 0 30px #008000,0 0 6px #0000ff;
    :hover{
        text-shadow: 0 0 200px #ffffff,0 0 80px #008000,0 0 6px #0000ff;
    }
    span{
        animation: ${upper} 6s linear infinite;
    }
`;
const lower=keyframes`
    0%,12%,18.999%,23%,31.999%,37%,44.999%,46%,49.999%,51%,58.999%,61%,68.999%,71%,85.999%,96%,100%{
        opacity: 0.99;
        text-shadow: 0 0 80px red,0 0 30px firebrick,0 0 6px darkred;
    }
    19%,22.99%,32%,36.999%,45%,45.999%,50%,50.99%,59%,60.999%,69%,70.999%,86%,95.999%{
        opacity:0.4;
        text-shadow:none;
    }
`;
export const NumbMessage=styled.p`
    margin: 5px;
    :hover{
        text-shadow: 0 0 100px red, 0 0 40px firebrick,0 0 8px darkred;
    }
    span{
        :nth-last-of-type(2){
            animation: ${lower} 9s linear infinite;
        }
        :nth-last-of-type(1){
            text-shadow: none;
            opacity: 0.4;
        }
    }
`;