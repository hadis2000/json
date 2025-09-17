import React, { useState, useContext } from "react";
import {
  TableBody,
  TableHeader,
  Count,
  SelecPageSize,
  Message,
} from "./TableMyCourses.style";
import { AiFillDelete } from "react-icons/ai";
import { Paginate } from "../../../core/utills/paginate";
import PaginationStyle from "../../../components/Common/pagination/pagination";
import ax from "../../../assets/img/coursesItams/empty.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "../../../components/Common/Search/Search";

import { DeleteStuOfCourse } from "../../../core/servises/api/deleteStuOfCourse";
import { IsLogged } from "../../../core/servises/context/IsLogged";

import { toast } from "react-toastify";

const TableMyCourses = (props) => {
  const { courses, handleCourses } = props;
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setcurrentPage] = useState(1);
  const [searchCourse, setSearchCourse] = useState([]);
  const isLog = useContext(IsLogged);
  const [userObj] = useState(isLog.studentData);

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };
  const CourseFilter = courses?.filter((val) => {
    if (searchCourse == "") {
      return val;
    } else if (val.title.includes(searchCourse)) {
      return val;
    }
  });

  const del = async (id) => {
    const obj = { courseId: id, userId: userObj._id };
    const result = await DeleteStuOfCourse(obj);
    result.message[0].eventId == 200
      ? toast.success(result.message[0].message)
      : toast.error("مشکلی پیش آمده لطفا دوباره سعی کنید");
    handleCourses();
  };
  const coursesValu = Paginate(CourseFilter, currentPage, pageSize);
  return (
    <>
      <Container dir="rtl" style={{ padding: "0px", marginBottom: "10px" }}>
        <Row>
          <Col lg={6}>
            <Search onChange={(e) => setSearchCourse(e.target.value)}></Search>
          </Col>
        </Row>
      </Container>
      <div className="table-responsive">
        <table className="table" dir="rtl">
          <TableHeader>
            <tr>
              <th> عکس دوره </th>
              <th> نام دوره </th>
              <th> مدرس </th>
              <th></th>
              <th></th>
              <th> قیمت </th>
              <th> </th>
            </tr>
          </TableHeader>
          <TableBody>
            {coursesValu.map((Course) => (
              <tr key={Course?._id}>
                <th>
                  <img
                    src={
                      Course?.lesson.image.length > 22
                        ? Course.lesson.image
                        : ax
                    }
                  />
                </th>
                <th>
                  {Course?.title.length > 10
                    ? Course?.title.slice(0, 10) + "..."
                    : Course?.title}
                </th>
                <th>
                  {Course?.teacher.fullName.length > 15
                    ? Course?.teacher.fullName.slice(0, 15) + "..."
                    : Course?.teacher.fullName}
                </th>
                <th></th>
                <th></th>

                <th>{Course.cost} </th>
                <th>
                  <AiFillDelete
                    className="iconDel"
                    onClick={() => del(Course._id)}
                  />
                </th>
              </tr>
            ))}
          </TableBody>
        </table>
      </div>
      {coursesValu.length > 0 ? "" : <Message>موردی یافت نشد</Message>}
      <Container
        className="mt-2"
        fluid
        style={{ textAlign: "center", width: "95%" }}
      >
        <Row>
          <Col className="mt-2" md={4}>
            <SelecPageSize
              onChange={(e) => {
                setPageSize(e.target.value);
                setcurrentPage(1);
              }}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </SelecPageSize>
          </Col>
          <Col className="mt-2" md={4}>
            {CourseFilter?.length > 0 ? (
              <PaginationStyle
                itemsCount={CourseFilter?.length}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            ) : (
              ""
            )}
          </Col>
          <Col className="mt-2" md={4}>
            <Count>
              <span>{CourseFilter?.length}</span> :تعداد دوره ها
            </Count>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TableMyCourses;
