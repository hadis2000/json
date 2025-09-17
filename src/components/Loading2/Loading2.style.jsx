import styled,{keyframes} from "styled-components";

export const Holder=styled.div`
    width: 100%;
    height: 200px;
    text-align: center;
    background: #ffffff71;
`;
const loaderAnim=keyframes`
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(180deg);
    }
    50%{
        transform: rotate(180deg);
    }
    75%{
        transform: rotate(360deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;
const loader_inner=keyframes`
    0%{
        height: 0%;
    }
    25%{
        height: 0%;
    }
    50%{
        height: 100%;
    }
    75%{
        height: 100%;
    }
    100%{
        height: 0%;
    }
`;
export const Loader=styled.span`
    display: inline-block;
    width: 50px;
    height: 50px;
    position: relative;
    border: 4px solid #004458;
    top: 50%;
    animation: ${loaderAnim} 2s infinite ease;
`;
export const LoaderInner=styled.span`
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color: gray;
    animation: ${loader_inner} 2s infinite ease-in;
`;

