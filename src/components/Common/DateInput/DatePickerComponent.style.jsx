import styled from "styled-components";
import { device } from "../../madia.style";

export const DateHolder=styled.div`
    width: 100%;
    margin: 10px 0;
    .custom{
        width: 100%;
        border: none;
        background: #eee;
        padding: 10px;
        border-radius: 3px;
        text-align: right;
        font-family: 'estedadM';
        font-weight: 400;
        ::placeholder{
            color: #003E50;
        }
        :hover{
            border-bottom: 2px solid #003E50;
            color: #003E50;
        }
    }
`;