import styled from "styled-components";
import { device } from "../../madia.style";

export const SearchHolder=styled.div`
    width: 80%;
    height: 40px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #aaa;
    @media ${device.custom} {
        width: 100%;
    }
    input{
        float: right;
        width: 87%;
        height: 100%;
        border: none;
        outline: none;
        color: #004458;
        font-family: 'estedadL';
        font-size: 19px;
        ::placeholder{
            color: #004458;
            font-family: 'estedadL';
            font-size: 19px;
        }
    }
    label{
        float: right;
        width: 13%;
        height: 100%;
        color: #004458;
        background: #fff;
        font-size: 20px;
        text-indent: 10px;
    }
`;