import React from "react";
import { HeaderF, Holder, InputHolder, Sp } from "./Auth.style";
import InputMain from "../Common/inputMain/inputMain";
import Btn from "../Common/button/Btn";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ForgetPassStu } from "../../core/servises/api/forgetPassStu";

const Validation = Yup.object().shape({
  email: Yup.string().email("ایمیل نامعتبر است").required("ایمیل را وارد کنید"),
});

const ForgetPass = () => {
  const onSubmit = async (values) => {
    const result = await ForgetPassStu(values);
    if (result) {
      toast.success(result.message[0].message);
    }
  };

  return (
    <Holder>
      <HeaderF stat={false}>فراموشی رمز</HeaderF>
      <InputHolder>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={onSubmit}
          validationSchema={Validation}
        >
          <Form>
            <InputMain name="email" typ="email">
              ایمیل
            </InputMain>
            <Btn fontSize="20px" customStyle="float:left;">
              ارسال
            </Btn>
            <ToastContainer style={{ fontFamily: "estedadM" }} />
            <Link to="/login">
              <Sp> ورود </Sp>
            </Link>
          </Form>
        </Formik>
      </InputHolder>
    </Holder>
  );
};

export default ForgetPass;
