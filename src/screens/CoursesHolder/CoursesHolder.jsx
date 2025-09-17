import React, { useState, useEffect } from "react";
import Courses from "../../components/Courses/Courses";
import { Paginate } from "../../core/utills/paginate";
import {
  Header,
  Holder,
  SelectFilter,
  Text,
  SelecPageSize,
  ImageHeader,
  Count,
} from "./CoursesHolder.style";
import PaginationStyle from "../../components/Common/pagination/pagination";
import HeadAx from "../../assets/img/article/head.png";

import { Row, Col, Container } from "react-bootstrap";
import Search from "../../components/Common/Search/Search";

import { GetCourses } from "../../core/servises/api/getCourses";
import Loading from "../../components/Loading/Loading";

const CoursesHolder = () => {
  const [cour, setCour] = useState([]);
  const [searchCourse, setSearchCourse] = useState([]);
  const [load, setLoad] = useState(false);
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setcurrentPage] = useState(1);
  const [option, setOption] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    const GetCour = async () => {
      setLoad(true);
      setCour(await GetCourses());
      setLoad(false);
    };
    GetCour();
  }, []);

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const filterCourses = {
    1: cour,
    2: [...cour].reverse(),
    3: [...cour].sort((a, b) => b.cost - a.cost),
    4: cour.filter((m) => m.capacity > 0),
  }[option].filter((val) => {
    if (searchCourse == "") {
      return val;
    } else if (val.title.includes(searchCourse)) {
      return val;
    }
  });
  const coursesValu = Paginate(filterCourses, currentPage, pageSize);
  return (
    <Holder>
      <ImageHeader src={HeadAx} alt={HeadAx} />
      {load ? (
        <Loading />
      ) : (
        <>
          <Container dir="rtl" className="mt-2" fluid style={{ width: "95%" }}>
            <Row>
              <Header>دوره های آموزشی</Header>
            </Row>
            <Row>
              <Col className="mt-2" sm={6}>
                <Search
                  onChange={(e) => setSearchCourse(e.target.value)}
                ></Search>
              </Col>
              <Col sm={3}></Col>
              <Col className="mt-2" sm={3}>
                <SelectFilter
                  onChange={(e) => {
                    setOption(e.target.value);
                  }}
                >
                  <option value="1">همه دوره ها</option>
                  <option value="2">جدیدترین ها</option>
                  <option value="3">گران ترین ها</option>
                  <option value="4">تکمیل نشده ها</option>
                </SelectFilter>
              </Col>
            </Row>
          </Container>

          <Container dir="rtl" className="mt-2" fluid style={{ width: "95%" }}>
            <Row>
              {coursesValu.length > 0 ? (
                coursesValu.map((Course) => (
                  <Col
                    key={Course._id}
                    className="mt-3"
                    lg={2}
                    md={4}
                    sm={6}
                    xs={12}
                  >
                    <Courses
                      title={Course.title}
                      teacher={Course.teacher.fullName}
                      capacity={Course.capacity}
                      cost={Course.cost}
                      startDate={Course.startDate}
                      endDate={Course.endDate}
                      countOfstu={Course.students.length}
                      pic={Course.lesson.image}
                      _id={Course._id}
                      Course={Course}
                    />
                  </Col>
                ))
              ) : (
                <Text>موردی یافت نشد</Text>
              )}
            </Row>
          </Container>

          <Container
            className="mt-2"
            fluid
            style={{ textAlign: "center", width: "95%" }}
          >
            <Row>
              <Col className="mt-2" sm={4}>
                <SelecPageSize
                  onChange={(e) => {
                    setPageSize(e.target.value);
                    setcurrentPage(1);
                  }}
                >
                  <option value="6">6</option>
                  <option value="12">12</option>
                  <option value="18">18</option>
                </SelecPageSize>
              </Col>
              <Col className="mt-2" sm={4}>
                {coursesValu.length > 0 ? (
                  <PaginationStyle
                    itemsCount={filterCourses.length}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                  />
                ) : (
                  ""
                )}
              </Col>
              <Col className="mt-2" sm={4}>
                <Count>
                  <span>{filterCourses.length}</span> :تعداد دوره ها
                </Count>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Holder>
  );
};

export default CoursesHolder;
