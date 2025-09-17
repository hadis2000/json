import React, { useState } from "react";
import Modal from "react-modal";
import Btn from "../Common/button/Btn";
import {
  Items,
  customStyles,
  Holder,
  Header,
  Matn,
  CourseImg,
  CourseCountainer,
  BtnDetail,
  CoursesPrice,
  BtnInc,
  BtnDec,
} from "./Courses.style";
import State from "../State/State";
import { useNavigate } from "react-router-dom";
import ax from "../../assets/img/coursesItams/empty.png";
import { CartState } from "../../core/servises/context/CartContext/CartContext";

Modal.setAppElement("#root");

const Courses = (props) => {
  const {
    title,
    teacher,
    capacity,
    cost,
    startDate,
    endDate,
    countOfstu,
    pic,
    _id,
    Course,
  } = props;
  const imageName = pic.length > 20 ? pic : ax;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Items>
      <CourseImg src={imageName} alt={title} />
      <CourseCountainer>
        <Header>
          {title.length < 10 ? title : title.slice(0, 10) + "..."}
        </Header>
        <Matn>
          {" "}
          مدرس :
          <span>
            {teacher.length < 8 ? teacher : teacher.slice(0, 8) + "..."}
          </span>
        </Matn>
        <Matn>
          ظرفیت :<span> {capacity - countOfstu} </span>
        </Matn>
        <BtnDetail onClick={openModal}>!</BtnDetail>

        {cart.some((p) => p._id === _id) ? (
          <BtnDec
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: Course,
              });
            }}
          >
            -
          </BtnDec>
        ) : (
          <BtnInc
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: Course,
              });
            }}
            disabled={capacity - countOfstu > 0 ? false : true}
          >
            +
          </BtnInc>
        )}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Holder>
            <Header>
              دوره {title.length < 20 ? title : title.slice(0, 20) + "..."}
            </Header>
            <Matn>
              {teacher.length < 22 ? "" : "..."} مدرس :
              <span>
                {teacher.length < 22 ? teacher : teacher.slice(0, 22)}
              </span>
            </Matn>
            <Matn>
              ظرفیت :<span> {capacity} </span> نفر
            </Matn>
            <Matn>
              تاریخ شروع :
              <span>{startDate.slice(0, 10).replace(/-/g, "/")}</span>
            </Matn>
            <Matn>
              تاریخ پایان :
              <span>{endDate.slice(0, 10).replace(/-/g, "/")}</span>
            </Matn>
            <Matn>
              قیمت :<span className="price">{cost}</span> تومان
            </Matn>
            <Matn>
              : وضعیت دوره
              <span>
                <State
                  capacity={capacity}
                  countStu={countOfstu}
                  custom="position: absolute;bottom: 22px;right: 100px;"
                />
              </span>
            </Matn>
            <img src={imageName} alt={title} />
          </Holder>
          <Btn
            onClick={() => navigate("/courseDetail/" + _id)}
            Mrg="30px auto"
            fontSize="20px"
          >
            مشاهده ی کامل
          </Btn>
        </Modal>
      </CourseCountainer>
      <CoursesPrice>
        تومان <span>{cost}</span>
      </CoursesPrice>
      <Btn
        onClick={() => navigate("/courseDetail/" + _id)}
        Mrg="10px auto"
        fontSize="15px"
      >
        مشاهده
      </Btn>
    </Items>
  );
};

export default Courses;
