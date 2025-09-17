import React, { useState, useEffect, useContext } from "react";
import HeaderContainer from "../../components/panel/HeaderContainer/HeaderContainer";
import TableAllCourses from "../../components/panel/TableAllCourses/TableAllCourses";

import { IsLogged } from "../../core/servises/context/IsLogged";
import { GetCourses } from "../../core/servises/api/getCourses";
import { GetStuById } from "../../core/servises/api/getStuById";
import Loading2 from "../../components/Loading2/Loading2";

const CoursesList = () => {
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
  return (
    <div>
      <HeaderContainer>لیست دوره ها</HeaderContainer>
      {load ? (
        <Loading2 />
      ) : (
        <TableAllCourses
          handleCourse={GetStuId}
          stu={stuCourse.courses}
          courses={cour}
        />
      )}
    </div>
  );
};

export default CoursesList;
