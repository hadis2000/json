import styled from "styled-components";
import { device } from "../../madia.style";

export const MenuRight = styled.div`
  width: 25%;
  height: 100vh;
  overflow: hidden;
  float: right;
  background: #088568;
  color: #fff;
  @media ${device.tablet} {
    width: 100%;
    height: auto;
  }
`;
export const MenuHeader = styled.h2`
  border-bottom: ${(props) => (props.bord ? "none" : "1px solid #fff")};
  width: 80%;
  margin: 10px auto;
  padding: 20px 0;
  text-align: center;
  font-size: 20px;
  font-family: "lale";
  @media ${device.tablet} {
    margin: 6px auto;
    padding: 10px 0;
    font-size: 14px;
  }
  @media ${device.mobile} {
    margin: 4px auto;
    padding: 9px 0;
    font-size: 9px;
  }
`;
export const Menu = styled.ul`
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  font-family: "estedadM";
  .link {
    text-decoration: none;
    background: #088568;
    color: #fff;
  }
  .selectMenu {
    background: #fff;
    color: #088568;
  }
`;
export const Item = styled.li`
  list-style: none;
  text-align: right;
  margin: 0;
  padding: 13px 0;
  padding-right: 10%;
  margin-bottom: 10px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  .icon {
    font-size: 30px;
  }
  :hover {
    background: #ffffffad;
    color: #088568dd;
  }
  @media ${device.tablet} {
    text-align: center;
    width: auto;
    padding: 4px;
    margin: 4px;
    float: right;
    font-size: 11px;
    .icon {
      font-size: 11px;
    }
  }
  @media ${device.mobile} {
    padding: 2px;
    margin: 2px;
    font-size: 6px;
    .icon {
      font-size: 6px;
    }
  }
`;
