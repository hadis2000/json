import React, { useState, useEffect, useContext } from "react";
import State from "../../components/State/State";
import Bttn from "../../components/Common/Button2/Bttn";

import ax from "../../assets/img/coursesItams/empty.png";
import axsa from "../../assets/img/2.png";
import {
  Infor,
  S,
  Information,
  Description,
  Icon,
  Text,
  Detalis,
  Cudets,
  Esmdore,
  Content,
  MOshakhsat,
  Namedore,
  TextDes,
  HoldHeader,
  HoldDtail,
  PriceCourse,
  Comments,
  Matn,
} from "./coursedatalis.style";
import { useParams } from "react-router-dom";
import SendCommentComp from "../../components/Common/sendCommentComp/sendCommentComp";

import {
  FaChalkboardTeacher,
  FaUsers,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { GetAllComment } from "../../core/servises/api/getAllComment";
import Comment from "../../components/Common/Comment/Comment";

import { GetCoursesById } from "../../core/servises/api/getCoursesById";
import { CountLike } from "../../core/servises/api/countLike";

import { LikeCourse } from "../../core/servises/api/LikeCourse";
import { DisLikeCourse } from "../../core/servises/api/DislikeCourse";
import { IsLogged } from "../../core/servises/context/IsLogged";
import { getItem } from "../../core/servises/storage/storage";
import { toast } from "react-toastify";

import { CartState } from "../../core/servises/context/CartContext/CartContext";

function CourseDetail() {
  const params = useParams();
  const [course, setCourse] = useState([]);
  const [comment, setComment] = useState([]);
  const [like, setLike] = useState([]);
  const [dislike, setDisLike] = useState([]);

  const isLogged = useContext(IsLogged);
  const userObj = JSON.parse(getItem("user"));

  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    window.scroll(0, 0);
    GetCourById();
    GetComment();
    GetLike();
  }, []);

  //show_Course_Detail
  const GetCourById = async () => {
    const get = await GetCoursesById(params.id);
    setCourse(get);
  };

  //show_Course_Comment
  const GetComment = async () => {
    const get = await GetAllComment();
    setComment(get);
  };
  const FilterComment = comment?.filter(
    (val) => val.postId == params.id && val.verified
  );

  //Like_and_dislike_Course
  const GetLike = async () => {
    const get = await CountLike(params.id);
    setLike(get.like);
    setDisLike(get.dislike);
  };

  const LikeCour = async () => {
    if (isLogged.currentLog) {
      const obj = {
        courseId: params.id,
        userId: userObj._id,
      };
      const result = await LikeCourse(obj);

      if (result.success) {
        toast.success(result.message[0].message);
        GetLike();
      } else toast.error(result.message[0].message);
    } else {
      toast.error(" ابتدا وارد حساب کاربری خود شوید ");
    }
  };
  const DislikeCour = async () => {
    if (isLogged.currentLog) {
      const obj = {
        courseId: params.id,
        userId: userObj._id,
      };
      const result = await DisLikeCourse(obj);

      if (result.success) {
        toast.success(result.message[0].message);
        GetLike();
      } else toast.error(result.message[0].message);
    } else {
      toast.error(" ابتدا وارد حساب کاربری خود شوید ");
    }
  };

  return (
    <>
      <div>
        <Infor src={axsa} />
        <S></S>
        <HoldHeader>
          <HoldDtail>
            <Icon>
              <img
                src={
                  course.lesson?.image.length > 20 ? course.lesson.image : ax
                }
                alt={course.title}
              />
            </Icon>
            <Esmdore>{course.title}</Esmdore>
            <Text>
              ظرفیت : {course.capacity} نفر <FaUsers />
            </Text>
            <Text>
              دانشجو : {course.students ? course.students.length : ""} نفر
              <FaGraduationCap />
            </Text>
            <State
              capacity={course?.capacity}
              countStu={course.students ? course.students.length : ""}
              custom="width:100%;clear:both;"
              fontColor="#333"
              backColor="#ddd"
              bgColor="#dddddd92"
            />
          </HoldDtail>
        </HoldHeader>

        <Information>
          <Description>
            <TextDes>
              <FaChalkboardTeacher />
            </TextDes>
            <TextDes> : مدرس </TextDes>
            <TextDes>{course.teacher?.fullName}</TextDes>
          </Description>
          <Description>
            <TextDes>
              <FaCalendarAlt />
            </TextDes>
            <TextDes>
              تاریخ شروع :
              <span>
                {course.startDate
                  ? course.startDate.slice(0, 10).replace(/-/g, "/")
                  : ""}
              </span>
            </TextDes>
            <TextDes>
              تاریخ پایان :
              <span>
                {course.endDate
                  ? course.endDate.slice(0, 10).replace(/-/g, "/")
                  : ""}
              </span>
            </TextDes>
          </Description>
          <Description>
            <TextDes>
              <p>
                <AiOutlineLike
                  style={{ cursor: "pointer" }}
                  onClick={LikeCour}
                />{" "}
                {like ? like : "0"}{" "}
                <AiOutlineDislike
                  style={{ cursor: "pointer" }}
                  onClick={DislikeCour}
                />
                {dislike ? dislike : "0"}
              </p>
            </TextDes>
          </Description>
        </Information>
      </div>

      <Content>
        <Detalis>
          <Tabs
            defaultActiveKey="Description"
            id="justify-tab-example"
            className="mb-3"
            justify
            dir="rtl"
          >
            <Tab tabClassName="tozih" eventKey="Description" title="توضیحات">
              <Cudets>{course.lesson?.description}</Cudets>
            </Tab>
            <Tab tabClassName="tozih" eventKey="Comments" title="نظرات">
              <Comments>
                {FilterComment?.length > 0 ? (
                  FilterComment.map((coment) => (
                    <Comment
                      key={coment._id}
                      date={coment.createDate.replace(/-/g, "/")}
                      username={coment.username}
                      comment={coment.comment}
                      answer={coment.answer}
                      id={coment._id}
                      handleComment={GetComment}
                    />
                  ))
                ) : (
                  <Matn>موردی یافت نشد</Matn>
                )}
              </Comments>
              <SendCommentComp id={params.id} />
            </Tab>
          </Tabs>
        </Detalis>

        <MOshakhsat>
          <Namedore> {course.title} </Namedore>
          <PriceCourse>
            <span className="mtn"> : قیمت دوره </span>
            <span className="pri"> ت {course.cost} </span>
          </PriceCourse>
          <PriceCourse>
            <span className="mtn"> : تخفیف </span>
            <span className="off"> 10% </span>
          </PriceCourse>
          <PriceCourse>
            <span className="main"> : مبلغ قابل پرداخت </span>
            <span className="mainPrice"> ت 180000 </span>
          </PriceCourse>
          <PriceCourse>
            <span className="main"> : مهلت تخفیف </span>
            <span className="mainPrice"> 01:18:50:20 </span>
          </PriceCourse>

          {cart.some((p) => p._id === course._id) ? (
            <Bttn
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: course,
                });
              }}
              backColor="red"
              name="حذف از سبد خرید"
            />
          ) : (
            <Bttn
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: course,
                });
              }}
              disabled={
                course?.capacity - course.students?.length > 0 ? false : true
              }
              name={
                course?.capacity - course.students?.length > 0
                  ? "افزودن به سبد خرید"
                  : "ظرفیت تکمیل است"
              }
            />
          )}
        </MOshakhsat>
      </Content>
    </>
  );
}

export default CourseDetail;
