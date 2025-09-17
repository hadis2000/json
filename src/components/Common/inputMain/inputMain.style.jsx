import styled from "styled-components";

export const InputBox=styled.div`
    width: 100%;
    position: relative;
    margin: 20px 0;
    input{
        width: 100%;
        border: none;
        background: #eee;
        padding: 10px;
        border-radius: 3px;
        text-align: right;
        font-family: 'estedadM';
        color: #003E50;
        ::placeholder{
            color: #003E50;
        }
        :hover{
            border-bottom: 2px solid #003E50;
        }
    }
`;