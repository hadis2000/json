import React from "react";
import {
  BOitem,
  Matn,
  Bordr,
  Citem,
  Holder,
  JAitem,
  JSitem,
  Left,
  Right,
  Square,
} from "./LCourses.style";
import Bttn from "../../Common/Button2/Bttn";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LCourses = () => {
  const navigate = useNavigate();
  return (
    <Holder>
      <Right>
        <Square />
        <JSitem>
          JS
          <Bttn
            onClick={() =>
              navigate("/courseDetail/" + "6352d0f0a1799a5411a4827b")
            }
            backColor="#fff"
            fontColor="#004458"
            name="دوره ی جاوا اسکریپت"
          />
        </JSitem>
        <Citem>
          C#
          <Bttn
            onClick={() =>
              navigate("/courseDetail/" + "6352d155a1799a5411a4827c")
            }
            backColor="#fff"
            fontColor="#004458"
            name="دوره سی شارپ"
          />
        </Citem>
        <BOitem>
          Bootstrap
          <Bttn
            onClick={() =>
              navigate("/courseDetail/" + "6352d253a1799a5411a4827f")
            }
            backColor="#fff"
            fontColor="#004458"
            name="دوره بوت استرپ"
          />
        </BOitem>
        <JAitem>
          React
          <Bttn
            onClick={() =>
              navigate("/courseDetail/" + "6352d2e1a1799a5411a48280")
            }
            backColor="#fff"
            fontColor="#004458"
            name="دوره ی ریکت"
          />
        </JAitem>
      </Right>
      <Left>
        <Bordr>
          <h2>دوره های آموزشی</h2>
          <Matn>
            دسترسی به با کیفیت ترین دوره های آموزشی آنلاین با تدریس برترین
            اساتید ایران در دسته بندی های ، گوناگونی همچون طراحی ، برنامه نویسی
            ، اقتصاد فلسفه ، فیزیک ، شیمی ، ریاضی ، هنر و
          </Matn>
          <Link to="/Courses">
            <Bttn
              name="مشاهده دوره ها"
              width="35%"
              height="60px"
              customStyle="position:absolute;left:50%;top:410px;"
            />
          </Link>
        </Bordr>
      </Left>
    </Holder>
  );
};

export default LCourses;
