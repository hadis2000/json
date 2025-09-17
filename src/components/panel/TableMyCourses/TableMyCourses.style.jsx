import styled from "styled-components";
import { device } from "../../madia.style";

export const TableHeader = styled.thead`
  background: #088568;
  color: #fff;
  text-align: center;
  font-family: "estedadBol";
`;
export const TableBody = styled.tbody`
  text-align: center;
  background: #f1f1f1;
  color: #004458;
  line-height: 40px;
  font-family: "estedadL";
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  tr {
    border-bottom: 1px solid #088568;
    .iconAdd {
      font-size: 30px;
      color: #088568;
      cursor: pointer;
    }
    .iconDel {
      font-size: 30px;
      color: red;
      cursor: pointer;
    }
  }
`;

export const Count = styled.p`
  color: #1d9a8d;
  text-align: right;
  line-height: 200%;
  font-size: 20px;
  font-family: "estedadL";
  @media ${device.custom} {
    font-size: 17px;
    text-align: center;
  }
`;
export const SelecPageSize = styled.select`
  float: left;
  text-align: center;
  background: #fff;
  color: #036a6d;
  font-weight: 600;
  border-radius: 5px;
  padding: 3px 0;
  font-family: "estedadM";
  @media ${device.custom} {
    float: none;
    width: 100%;
  }
`;
export const Message = styled.p`
  text-align: center;
  font-family: "estedadM";
  color: #aaa;
  margin-top: 20px;
  font-size: 20px;
`;
