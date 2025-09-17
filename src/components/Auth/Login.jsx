import React, { useContext } from "react";
import {
  Header,
  Chek,
  Holder,
  InputHolder,
  Forget,
  Sp,
  LoginEmp,
} from "./Auth.style";
import InputMain from "../Common/inputMain/inputMain";
import Btn from "../Common/button/Btn";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { LoginStu } from "../../core/servises/api/loginStu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { setItem } from "../../core/servises/storage/storage";
import { IsLogged } from "../../core/servises/context/IsLogged";
import { FaChalkboardTeacher } from "react-icons/fa";

const Validation = Yup.object().shape({
  email: Yup.string().email("ایمیل نامعتبر است").required("ایمیل را وارد کنید"),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "حداقل 8 کاراکتر وارد کنید"),
});

const Login = () => {
  const navigate = useNavigate();
  const isLog = useContext(IsLogged);

  const onSubmit = async (values) => {
    delete values.remember;
    const result = await LoginStu(values);
    if (result) {
      setItem("token", result.result.jwtToken);
      setItem("user", JSON.stringify(result.result.studentModel));
      isLog.HandleStu(result.result.studentModel);
      isLog.chageLogged(true);
      navigate("/");
      isLog.HandleToast(result.message[0].message);
    } else {
      toast.error("ایمیل یا رمز عبور نادرست است");
    }
  };

  return (
    <Holder>
      <LoginEmp
        onClick={() => {
          window.location.href = "http://localhost:3001/";
        }}
      >
        ورود کارمندان
        <FaChalkboardTeacher />
      </LoginEmp>
      <Header stat={false}>ورود کاربر</Header>
      <InputHolder>
        <Formik
          initialValues={{ email: "", password: "", remember: "" }}
          onSubmit={onSubmit}
          validationSchema={Validation}
        >
          <Form>
            <InputMain name="email" typ="email">
              ایمیل
            </InputMain>
            <InputMain name="password" typ="password">
              رمز عبور
            </InputMain>
            <Chek className="form-check chek" dir="rtl">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label className="form-check-label" htmlFor="remember">
                من را به خاطر بسپار
              </label>
            </Chek>
            <Link style={{ color: "#004458" }} to="/forgetpass">
              <Forget>فراموشی رمز</Forget>
            </Link>
            <Btn fontSize="20px" customStyle="float:left;">
              ورود
            </Btn>
            <ToastContainer style={{ fontFamily: "estedadM" }} />
            <Link to="/register">
              <Sp> ثبت نام </Sp>
            </Link>
          </Form>
        </Formik>
      </InputHolder>
    </Holder>
  );
};

export default Login;
