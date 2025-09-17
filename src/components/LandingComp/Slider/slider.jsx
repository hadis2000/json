import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./slider.css";
import { Autoplay } from "swiper";
import { Typewriter } from "react-simple-typewriter";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";

import LSearch from "../Landinsearch/LSearch";

import pic1 from "../../../assets/img/slider/1.png";
import pic2 from "../../../assets/img/slider/2.png";
import pic3 from "../../../assets/img/slider/3.png";
import pic5 from "../../../assets/img/slider/44.png";
import { Link } from "react-router-dom";
import Bttn from "../../Common/Button2/Bttn";

import { GetCourses } from "../../../core/servises/api/getCourses";
// import { GetAllStu } from "../../../core/servises/api/getAllStu";
import { GetAllTeacher } from "../../../core/servises/api/getAllTeacher";

function Slider() {
  const [cour, setCour] = useState([]);
  // const [stu, setStu] = useState([]);
  const [teach, setTeach] = useState([]);

  const GetCour = async () => {
    setCour(await GetCourses());
  };
  // const GetStu = async () => {
  //   setStu(await GetAllStu());
  // };
  const GetTeach = async () => {
    setTeach(await GetAllTeacher());
  };

  useEffect(() => {
    GetCour();
    // GetStu();
    GetTeach();
  }, []);
  // console.log(stu);
  return (
    <>
      <div className="holderSliderText">
        <h3 className="Typewriter">
          <Typewriter
            words={[`  باید راه بهتری برای آموزش ساخته میشد پس ما ساختیمش`]}
            cursor="left"
            cursorStyle=""
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        <p className="informa2">
          سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی و همچنین آشنایی
          جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم بتوانیم
          با راهکار های نوین ، فرصتی . برای افراد خواهان پیشرفت فراهم کنیم
        </p>
        <Link style={{ textDecoration: "none" }} to="/Courses">
          <Bttn
            name="مشاهده دوره ها"
            backColor="#fff"
            fontColor="#004458"
            width="100px"
            height="45px"
            customStyle="position:relative;z-index:4;"
            mobileStyle="margin-top:40px"
          />
        </Link>
      </div>

      <div className="mask"></div>
      <div className="slider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={pic1} alt={pic1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic2} alt={pic2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic3} alt={pic3} />
          </SwiperSlide>
        </Swiper>
      </div>

      <LSearch />

      <div className="info">
        <img className="infor" src={pic5} alt={pic5} />
        <div className="s"></div>
        <div className="information">
          <div className="description">
            <h3 className="infoIcon">
              <FaUserGraduate />
            </h3>
            <h2 className="tedad">
              دانشجو <span>13</span>
            </h2>
            <h3 className="toz">
              تا کنون بیش از 9 نفر از آموزش های بامبو استفاده کرده اند .و نظرات
              خودشونو ثبت کرده اند
            </h3>
          </div>
          <div className="description">
            <h3 className="infoIcon">
              <FaChalkboardTeacher />
            </h3>
            <h2 className="tedad">
              استاد <span>{teach.length}</span>
            </h2>
            <h3 className="toz">
              بیش از {teach.length} استاد ، از برترین اساتید ایران همراه ما
              هستند .و دوره های خودشونو ثبت کرده اند
            </h3>
          </div>
          <div className="description">
            <h3 className="infoIcon">
              <FaGraduationCap />
            </h3>
            <h2 className="tedad">
              دوره <span>{cour.length}</span>
            </h2>
            <h3 className="toz">
              تا کنون بیش از {cour.length} دوره ، از دسته بندی های متفاوت .در
              سایت ثبت شده و قابل دسترسی است
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
