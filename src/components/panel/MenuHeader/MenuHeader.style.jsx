import styled from "styled-components";
import { device } from "../../madia.style";

export const Holder = styled.div`
  width: 95%;
  overflow: hidden;
  background: #fff;
  color: #088568;
  margin: 10px auto;
  font-weight: 500;
`;
export const MenuItems = styled.ul`
  margin: 0;
  padding: 0;
  float: right;
  .link {
    text-decoration: none;
    color: #088568;
  }
`;
export const Item = styled.li`
  padding: 10px;
  list-style: none;
  float: right;
  margin-right: 8px;
  font-family: "estedadBol";
  font-size: 16px;
  position: relative;
  .badge_cart {
    background: #088568;
    color: #fff !important;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    font-size: 10px;
    text-align: center;
    position: absolute;
    top: 19px;
    right: 5px;
  }
  cursor: pointer;
  .icon {
    font-size: 30px;
  }
  :hover {
    font-size: 20px;
    font-weight: 700;
  }
  @media ${device.tablet} {
    padding: 8px;
    margin-right: 10px;
    font-size: 12px;
    .icon {
      font-size: 18px;
    }
    :hover {
      font-size: 14px;
      font-weight: 600;
    }
  }
  @media ${device.mobile} {
    padding: 4px;
    margin-right: 5px;
    font-size: 9px;
    .icon {
      font-size: 12px;
    }
    :hover {
      font-size: 11px;
      font-weight: 600;
    }
  }
`;
export const User = styled.div`
  padding: 10px;
  float: left;
  margin-left: 15px;
  @media ${device.tablet} {
    padding: 8px;
    margin-left: 10px;
    font-size: 12px;
    .icon {
      font-size: 18px;
    }
  }
  @media ${device.mobile} {
    padding: 4px;
    margin-left: 5px;
    font-size: 9px;
    .icon {
      font-size: 12px;
    }
  }
`;
export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid #088568;
  cursor: pointer;
`;
