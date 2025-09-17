import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Circle, Header, Holder } from "./BestTeacher.style";
import { GetAllTeacher } from "../../../core/servises/api/getAllTeacher";

const BestTeacher = () => {
  const [teach, setTeach] = useState([]);
  const GetTeach = async () => {
    setTeach(await GetAllTeacher());
  };
  useEffect(() => {
    GetTeach();
  }, []);

  return (
    <Holder>
      <Header>اساتید برتر</Header>
      <Row>
        {teach
          .map((teacher) => (
            <Col key={teacher._id}>
              <Circle>
                <img src={teacher.profile} alt={teacher.fullName} />
                <p>
                  <span>{teacher.fullName}</span>
                  <span>{teacher.email}</span>
                </p>
              </Circle>
            </Col>
          ))
          .slice(0, 4)}
      </Row>
    </Holder>
  );
};

export default BestTeacher;
