import React, { useState, useContext } from "react";
import {
  TableBody,
  TableHeader,
  Count,
  SelecPageSize,
  Message,
} from "./TableAllCourses.style";
import { TbShoppingCartOff, TbShoppingCartPlus } from "react-icons/tb";
import { Paginate } from "../../../core/utills/paginate";
import PaginationStyle from "../../../components/Common/pagination/pagination";
import ax from "../../../assets/img/coursesItams/empty.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "../../../components/Common/Search/Search";

import { CartState } from "../../../core/servises/context/CartContext/CartContext";

const TableAllCourses = (props) => {
  const { courses } = props;
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setcurrentPage] = useState(1);
  const [searchCourse, setSearchCourse] = useState([]);

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

  const {
    state: { cart },
    dispatch,
  } = CartState();

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
              <th> ظرفیت </th>
              <th> تاریخ شروع </th>
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
                <th> {Course?.capacity - Course.students?.length} نفر </th>
                <th> {Course?.startDate.slice(0, 10).replace(/-/g, "/")} </th>
                <th>{Course.cost} </th>
                <th>
                  {cart.some((p) => p._id === Course._id) ? (
                    <TbShoppingCartOff
                      className="iconDel"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: Course,
                        });
                      }}
                    />
                  ) : (
                    <TbShoppingCartPlus
                      className="iconAdd"
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: Course,
                        });
                      }}
                      disabled={
                        Course?.capacity - Course.students?.length > 0
                          ? false
                          : true
                      }
                    />
                  )}
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

export default TableAllCourses;
