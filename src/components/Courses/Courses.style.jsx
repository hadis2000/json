import styled, { keyframes } from "styled-components";
import { device } from "../madia.style";

export const customStyles = {
  content: {
    width: "450px",
    height: "450px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export const Holder = styled.div`
  width: 95%;
  height: 70%;
  margin: 0 auto;
  border-bottom: 2px solid #004458;
  text-align: right;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #ccc;
  }
`;
export const Header = styled.h2`
  color: #004458;
  margin: 7px 0;
  text-align: right;
  font-size: 18px;
  font-family: "estedadBol";
  text-shadow: 1px 1px 5px #ccc;
  @media ${device.mobile} {
    font-size: 13px;
  }
  @media ${device.custom} {
    font-size: 20px;
  }
`;
export const Matn = styled.p`
  color: #3e7788;
  text-align: right;
  font-family: "estedadTH";
  text-shadow: 1px 1px 5px #ccc;
  font-size: 20px;
  .price {
    color: #09b28b;
  }
  @media ${device.desktop} {
    font-size: 15px;
  }
  @media ${device.custom} {
    font-size: 16px;
  }
`;

export const CourseImg = styled.img`
  width: 100%;
  height: 50%;
  transition: 0.3s;
  @media ${device.laptop} {
    height: 50%;
  }
  @media ${device.tablet} {
    height: 53%;
  }
  @media ${device.mobile} {
    height: 54%;
  }
`;
const anim1 = keyframes`
	0%{
		opacity: 0;
		transform: scale(0);
	}
	20%{
		opacity: 1;
		transform: scale(1.1);
	}
	100%{
		opacity: 1;
		transform: scale(1);
	}
`;
export const Items = styled.div`
  height: 400px;
  background: #fff;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #ccc;
  animation: ${anim1} 2s;
  :hover > ${CourseImg} {
    height: 35%;
  }
  @media ${device.laptop} {
    :hover > ${CourseImg} {
      height: 30%;
    }
  }
  @media ${device.desktop} {
    height: 350px;
  }
  @media ${device.tablet} {
    font-size: 10px;
    height: 500px;
    margin: 15px 30px;
  }
`;

export const CourseCountainer = styled.div`
  width: 90%;
  height: 38%;
  margin: 0 auto;
  padding-bottom: 10px;
  position: relative;
  border-bottom: 1px solid #0043587a;
  @media ${device.mobile} {
    height: 33%;
  }
`;
export const BtnDetail = styled.span`
  width: 23px;
  height: 23px;
  line-height: 23px;
  color: #fff;
  background: #004458;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 2px;
  cursor: pointer;
  box-shadow: 1px 1px 5px #ccc;
  :hover {
    width: 25px;
    height: 25px;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const BtnInc = styled.span`
  width: 23px;
  height: 23px;
  line-height: 23px;
  color: #fff;
  background: green;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 30px;
  cursor: pointer;
  box-shadow: 1px 1px 5px #ccc;
  :hover {
    width: 25px;
    height: 25px;
  }
`;
export const BtnDec = styled.span`
  width: 23px;
  height: 23px;
  line-height: 23px;
  color: #fff;
  background: red;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 30px;
  cursor: pointer;
  box-shadow: 1px 1px 5px #ccc;
  :hover {
    width: 25px;
    height: 25px;
  }
`;

export const CoursesPrice = styled.div`
  text-align: left;
  font-size: 14px;
  color: #09b28b;
  width: 100px;
  margin: 10px 5px;
  @media ${device.mobile} {
    font-size: 10px;
  }
`;
