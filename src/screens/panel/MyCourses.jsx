import React, { useState, useEffect, useContext } from "react";
import HeaderContainer from "../../components/panel/HeaderContainer/HeaderContainer";
import TableMyCourses from "../../components/panel/TableMyCourses/TableMyCourses";

import { IsLogged } from "../../core/servises/context/IsLogged";
import { GetStuById } from "../../core/servises/api/getStuById";
import Loading2 from "../../components/Loading2/Loading2";

const MyCourses = () => {
  const [stuCourse, setStuCourse] = useState([]);
  const isLog = useContext(IsLogged);
  const [userObj] = useState(isLog.studentData);
  const [load, setLoad] = useState(false);

  const GetStuId = async () => {
    setLoad(true);
    setStuCourse(await GetStuById(userObj._id));
    setLoad(false);
  };

  useEffect(() => {
    GetStuId();
  }, []);

  return (
    <div>
      <HeaderContainer> دوره های من </HeaderContainer>
      {load ? (
        <Loading2 />
      ) : (
        <TableMyCourses handleCourses={GetStuId} courses={stuCourse.courses} />
      )}
    </div>
  );
};

export default MyCourses;
