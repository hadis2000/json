import React from "react";
import { Holder, Header, InputHolder, Sp, DateBox } from "./Auth.style";
import InputMain from "../Common/inputMain/inputMain";
import Btn from "../Common/button/Btn";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { DatePickerField } from "../Common/DateInput/DatePickerComponent";

import { RegisterStu } from "../../core/servises/api/registerStu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Overlay from "../Common/overlay/Overlay";

const Validation = Yup.object().shape({
  fullName: Yup.string().required("نام کاربری را وارد کنید"),
  email: Yup.string()
    .email("ایمیل نامعتبر میباشد")
    .required("ایمیل را وارد کنید"),
  phoneNumber: Yup.string()
    .required("شماره موبایل خود را وارد کنید")
    .matches(
      /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/,
      "فرمت شماره وارد شده صحیح نمیباشد"
    ),
  nationalId: Yup.number()
    .typeError("کد ملی باید عدد باشد")
    .required("کدملی را وارد کنید")
    .test(
      "code",
      "کدملی باید 10 رقم باشد",
      (val) => val && val.toString().length === 10
    ),
  birthDate: Yup.string()
    .required("تاریخ تولد خود را وارد کنید")
    .matches(
      /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|31|([1-2][0-9])|(0[1-9]))))$/,
      "فرمت تاریخ درست نمیباشد"
    ),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "حداقل 8 کاراکتر وارد کنید"),
  repass: Yup.string()
    .required("تکرار رمز عبور را وارد کنید")
    .oneOf([Yup.ref("password")], "تکرار پسورد اشتباه است"),
});

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    delete values.repass;

    const result = await RegisterStu(values);
    if (result) {
      toast.success(result.message[0].message);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <Holder state={true}>
      <Header stat={true}>ثبت نام</Header>
      <InputHolder>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phoneNumber: "",
            nationalId: "",
            birthDate: "",
            password: "",
            repass: "",
          }}
          onSubmit={onSubmit}
          validationSchema={Validation}
        >
          <Form>
            <InputMain name="fullName"> نام کاربری </InputMain>
            <InputMain name="email" typ="email">
              ایمیل
            </InputMain>
            <InputMain name="phoneNumber"> شماره موبایل </InputMain>
            <InputMain name="nationalId"> شماره ملی </InputMain>
            <DateBox>
              <ErrorMessage
                name="birthDate"
                render={(msg) => <Overlay>{msg}</Overlay>}
              ></ErrorMessage>
              <DatePickerField name="birthDate" text=" : تاریخ تولد " />
            </DateBox>
            <InputMain name="password" typ="password">
              رمز عبور
            </InputMain>
            <InputMain name="repass" typ="password">
              تکرار رمز عبور
            </InputMain>
            <Btn Mrg="0 0 30px" fontSize="20px" customStyle="float:left;">
              ثبت نام
            </Btn>
            <ToastContainer style={{ fontFamily: "estedadM" }} />
            <Link to="/login">
              <Sp>ورود</Sp>
            </Link>
          </Form>
        </Formik>
      </InputHolder>
    </Holder>
  );
};

export default Register;
