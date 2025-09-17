import React from "react";
import { Holder, ImageP, MatnP, HoverHolder } from "./CoursesPanel.style";
import ax from "../../../assets/img/coursesItams/empty.png";
import Bttn from "../../Common/Button2/Bttn";
import { useNavigate } from "react-router-dom";

const CoursesPanel = (props) => {
  const navigate = useNavigate();
  const { _id, cost, title, teacher, pic } = props;
  return (
    <Holder>
      <ImageP src={pic?.length > 20 ? pic : ax} />
      <HoverHolder>
        <Bttn
          backColor="#ffffffee"
          fontColor="#004458"
          width="60px"
          height="40px"
          name="مشاهده"
          customStyle="margin:30px auto;"
          onClick={() => navigate("/courseDetail/" + _id)}
        />
      </HoverHolder>
      <MatnP> {title}</MatnP>
      <MatnP>
        {teacher?.length > 10 ? "..." : ""} مدرس :{" "}
        {teacher?.length > 10 ? teacher?.slice(0, 10) : teacher}
        <span> {cost} تومان </span>
      </MatnP>
    </Holder>
  );
};

export default CoursesPanel;
