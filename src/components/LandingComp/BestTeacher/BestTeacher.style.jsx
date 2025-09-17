import styled from "styled-components";
import { device } from "../../madia.style";

export const Holder = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: center;
  background: #eee;
`;
export const Circle = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  margin: 30px auto 50px;
  overflow: hidden;
  position: relative;
  box-shadow: 1px 1px 5px #333;
  img {
    height: 100%;
    transition: all 0.3s;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-family: "estedadM";
    opacity: 0;
    transition: all 0.3s;
    span {
      display: block;
    }
  }
  :hover img {
    transform: scale(1.1);
    -webkit-filter: grayscale(100%) blur(2px);
    filter: grayscale(100%) blur(2px);
    cursor: default;
  }
  :hover p {
    opacity: 1;
    cursor: default;
  }
`;
export const Header = styled.h2`
  width: 300px;
  margin: 30px auto 10px;
  padding: 10px;
  font-family: "estedadBol";
  font-weight: bold;
  background: #002a42;
  color: #fff;
  font-size: 35px;
  border-radius: 7px;
  box-shadow: 1px 1px 5px #002a42;
`;
