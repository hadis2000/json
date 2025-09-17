import React from "react";
import { Holder, Ax1, Ax2, HolderOption, Mtn1, Mtn2 } from "./Option.style";
import im1 from "../../../assets/img/1.png";
import im2 from "../../../assets/img/22.png";
import im3 from "../../../assets/img/3.png";
import Bttn from "../../Common/Button2/Bttn";
import { useNavigate } from "react-router-dom";

const Option = () => {
  const navigate = useNavigate();
  return (
    <Holder>
      <HolderOption>
        <Mtn1>
          <h2>مشاوره آنلاین</h2>
          <p>...مشاوران ما برای حل مشکلات شما آماده اند</p>
        </Mtn1>
        <Ax1>
          <img src={im1} alt="im1" />
          <div>
            <Bttn
              onClick={() => {
                navigate("/aboutus");
                window.scroll(0, 0);
              }}
              customStyle="margin:70px auto;"
              name="مشاوره"
            />
          </div>
        </Ax1>
      </HolderOption>
      <HolderOption>
        <Mtn2>
          <h2>ارائه مدرک معتبر</h2>
          <p>...بهترین راه برای ساختن رزومه ی حرفه ای</p>
        </Mtn2>
        <Ax2>
          <img src={im2} alt="im2" />
        </Ax2>
      </HolderOption>
      <HolderOption>
        <Mtn1>
          <h2>همکاری در آموزش</h2>
          <p>...به اساتید آموزشی ما در بامبو بپیوندید</p>
        </Mtn1>
        <Ax1>
          <img src={im3} alt="im3" />
        </Ax1>
      </HolderOption>
    </Holder>
  );
};

export default Option;
