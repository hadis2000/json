import React, { useState, useEffect, useContext } from "react";
import {
  Holder,
  Info,
  InfoMatn,
  Left,
  Right,
  InfoTitle,
  InfoText,
  Message,
} from "./Dashboard.style";
import HeaderContainer from "../../../components/panel/HeaderContainer/HeaderContainer";
import Bttn from "../../../components/Common/Button2/Bttn";
import CoursesPanel from "../../../components/panel/CoursesPanel/CoursesPanel";
import { Link } from "react-router-dom";

import { GetCourses } from "../../../core/servises/api/getCourses";
import { GetStuById } from "../../../core/servises/api/getStuById";
import Loading2 from "../../../components/Loading2/Loading2";

import { IsLogged } from "../../../core/servises/context/IsLogged";

const Dashboard = () => {
  const [cour, setCour] = useState([]);
  const [stuCourse, setStuCourse] = useState([]);
  const isLog = useContext(IsLogged);
  const [userObj] = useState(isLog.studentData);
  const [load, setLoad] = useState(false);

  const GetCour = async () => {
    setCour(await GetCourses());
  };
  const GetStuId = async () => {
    setStuCourse(await GetStuById(userObj._id));
  };

  useEffect(() => {
    setLoad(true);
    GetCour();
    GetStuId();
    setLoad(false);
  }, []);

  const index1 = Math.floor(Math.random() * cour.length);
  const index2 = Math.floor(Math.random() * cour.length);

  return (
    <Holder>
      <Right>
        <HeaderContainer> اطلاعات شما </HeaderContainer>
        <Info>
          <InfoMatn>
            <InfoTitle> : نام کاربری </InfoTitle>
            <InfoText> {userObj.fullName} </InfoText>
          </InfoMatn>
          <InfoMatn>
            <InfoTitle> : ایمیل </InfoTitle>
            <InfoText> {userObj.email} </InfoText>
          </InfoMatn>
          <InfoMatn>
            <InfoTitle> : شماره موبایل </InfoTitle>
            <InfoText> {userObj.phoneNumber} </InfoText>
          </InfoMatn>
          <InfoMatn>
            <InfoTitle> : شماره ملی </InfoTitle>
            <InfoText> {userObj.nationalId} </InfoText>
          </InfoMatn>
          <InfoMatn>
            <InfoTitle> : تاریخ تولد </InfoTitle>
            <InfoText> {userObj.birthDate} </InfoText>
          </InfoMatn>
          <InfoMatn>
            <Link style={{ textDecoration: "none" }} to="ProfileEdite">
              <Bttn
                backColor="#09B28B"
                fontColor="#fff"
                fontSize="15px"
                width="60%"
                name="ویرایش "
                customStyle="margin:20px auto 10px;"
              />
            </Link>
          </InfoMatn>
        </Info>
      </Right>
      <Left>
        <HeaderContainer> آخرین دوره ثبت شده </HeaderContainer>
        {load ? (
          <Loading2 />
        ) : stuCourse.courses?.slice(-1).length > 0 ? (
          <CoursesPanel
            _id={stuCourse.courses?.slice(-1)[0]._id}
            cost={stuCourse.courses?.slice(-1)[0].cost}
            title={stuCourse.courses?.slice(-1)[0].title}
            teacher={stuCourse.courses?.slice(-1)[0].teacher.fullName}
            pic={stuCourse.courses?.slice(-1)[0].lesson.image}
          />
        ) : (
          <Message>شما در دوره ای شرکت نکردید</Message>
        )}
        <HeaderContainer> دوره های پیشنهادی </HeaderContainer>
        {load ? (
          <Loading2 />
        ) : (
          <>
            <CoursesPanel
              _id={cour[index1]?._id}
              cost={cour[index1]?.cost}
              title={cour[index1]?.title}
              teacher={cour[index1]?.teacher.fullName}
              pic={cour[index1]?.lesson.image}
            />
            <CoursesPanel
              _id={cour[index2]?._id}
              cost={cour[index2]?.cost}
              title={cour[index2]?.title}
              teacher={cour[index2]?.teacher.fullName}
              pic={cour[index2]?.lesson.image}
            />
          </>
        )}
      </Left>
    </Holder>
  );
};

export default Dashboard;
