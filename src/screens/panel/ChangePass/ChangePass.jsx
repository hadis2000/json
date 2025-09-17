import React, { useState, useEffect, useContext } from "react";
import HeaderContainer from "../../../components/panel/HeaderContainer/HeaderContainer";
import InputMain from "../../../components/Common/inputMain/inputMain";
import Btn from "../../../components/Common/button/Btn";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Holder } from "./ChangePass.style";

import { IsLogged } from "../../../core/servises/context/IsLogged";
import { ForgetPassStu } from "../../../core/servises/api/forgetPassStu";
import { ResetPass } from "../../../core/servises/api/resetPass";
import { GetStuById } from "../../../core/servises/api/getStuById";
import { toast } from "react-toastify";

const Validation = Yup.object().shape({
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "حداقل 8 کاراکتر وارد کنید"),
  repass: Yup.string()
    .required("تکرار رمز عبور را وارد کنید")
    .oneOf([Yup.ref("password")], "تکرار پسورد اشتباه است"),
});

const ChangePass = () => {
  const isLog = useContext(IsLogged);
  const [userObj] = useState(isLog.studentData);

  const onSubmit = async (values) => {
    await ForgetPassStu({ email: userObj.email });
    const stu = await GetStuById(userObj._id);
    delete values.repass;
    const result = await ResetPass(values, stu.resetPasswordToken);
    toast.success(result.message[0].message);
  };

  return (
    <div>
      <HeaderContainer> تغییر رمز عبور </HeaderContainer>
      <Holder>
        <Formik
          initialValues={{ password: "", repass: "" }}
          onSubmit={onSubmit}
          validationSchema={Validation}
        >
          <Form>
            <InputMain name="password" typ="password">
              رمز عبور
            </InputMain>
            <InputMain name="repass" typ="password">
              تکرار رمز عبور
            </InputMain>
            <Btn fontSize="20px" customStyle="float:left;">
              تغییر
            </Btn>
          </Form>
        </Formik>
      </Holder>
    </div>
  );
};

export default ChangePass;
