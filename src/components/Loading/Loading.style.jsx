import styled,{ keyframes} from "styled-components";

export const Body=styled.div`
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: #010001;
    font-size: 1.5rem;
`;
export const Pencil_animation =keyframes`
    0% {
        transform: rotate(135deg);
    }
    20% {
        transform: rotate(315deg);
    }
    45% {
        transform: translateX(300px) rotate(315deg);
    }
    55% {
        transform: translateX(300px) rotate(495deg);
    }
    100% {
        transform: rotate(495deg);
    }
`;
export const Pencil=styled.div`
    position: relative;
    width: 300px;
    height: 40px;
    transform-origin: center;
    transform: rotate(135deg);
    animation: ${Pencil_animation} 10s infinite;
`;
export const Pencil__ball_point=styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: rgb(2 165 116);
    height: 10px;
    width: 10px;
    border-radius: 50px;
`;
export const Pencil__cap=styled.div`
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    clip-path: polygon(20% 40%, 100% 0%, 100% 100%, 20% 60%);
    background: #232123;
    width: 12%;
    height: 100%;
`;
export const Pencil__cap_base=styled.div`
    position: absolute;
    left: 12%;
    top: 0;
    height: 100%;
    width: 20px;
    background: #232123;
`;
export const Pencil__middle=styled.div`
    position: absolute;
    left: calc(12% + 20px);
    top: 0;
    height: 100%;
    width: 70%;
    background: rgb(2 165 116);
`;
export const Pencil__eraser=styled.div`
    position: absolute;
    left: calc(12% + 70% + 20px);
    top: 0;
    height: 100%;
    width: 11%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #232123;
`;
export const Line_animation =keyframes`
    20% {
    transform: scaleX(0);
    }
    45% {
    transform: scaleX(0.6);
    }
    55% {
    transform: scaleX(0.6);
    }
    100% {
    transform: scaleX(0);
    }
`;
export const Line=styled.div`
    position: relative;
    top: 80px;
    right: 103px;
    height: 10px;
    width: 1000px;
    border-radius: 50px;
    background: rgb(2 165 116);
    transform: scaleX(0);
    transform-origin: center;
    animation: ${Line_animation} 10s infinite;
`;
export const Matn=styled.h2`
    position: relative;
    top: 150px;
    right: 75px;
`;