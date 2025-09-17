import React, { useState, useContext } from "react";
import HeaderContainer from "../../../components/panel/HeaderContainer/HeaderContainer";
import {
  Holder,
  HolderBtn,
  InputChoice,
  InputText,
  Left,
  Right,
} from "./ProfileEdite.style";
import InputMain from "../../../components/Common/inputMain/inputMain";
import Bttn from "../../../components/Common/Button2/Bttn";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DatePickerField } from "../../../components/Common/DateInput/DatePickerComponent";
import Overlay from "../../../components/Common/overlay/Overlay";

import { IsLogged } from "../../../core/servises/context/IsLogged";
import { UpdateStuInfo } from "../../../core/servises/api/updateStuInfo";
import { UploadImg } from "../../../core/servises/api/uploadImg";
import { ToastContainer, toast } from "react-toastify";
import { setItem } from "../../../core/servises/storage/storage";

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
});

const ProfileEdite = () => {
  const isLog = useContext(IsLogged);
  const [userObj] = useState(isLog.studentData);
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = async (values) => {
    let img = "";
    if (selectedFile != null) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      img = await UploadImg(formData);
    } else {
      img = userObj.profile;
    }
    values.profile = img;

    const result = await UpdateStuInfo(userObj._id, values);
    if (result.message[0].eventId == 200) {
      toast.success(result.message[0].message);
      setItem("user", JSON.stringify(result.result));
      isLog.HandleStu(result.result);
    } else {
      toast.error("مشکلی پیش آمده لطفا دوباره سعی کنید");
    }
  };

  return (
    <Holder>
      <HeaderContainer> ویرایش پروفایل </HeaderContainer>
      <Formik
        initialValues={{
          fullName: userObj.fullName,
          email: userObj.email,
          phoneNumber: userObj.phoneNumber,
          nationalId: userObj.nationalId,
          birthDate: userObj.birthDate,
          profile: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Validation}
      >
        <Form>
          <Right>
            <InputText>: نام کاربری </InputText>
            <InputMain name="fullName" />
            <InputText>:شماره موبایل</InputText>
            <InputMain name="phoneNumber" />
            <InputText>:ایمیل</InputText>
            <InputMain name="email" typ="email" />
          </Right>
          <Left>
            <InputText className="birth">:تاریخ تولد </InputText>
            <div style={{ position: "relative" }}>
              <ErrorMessage
                name="birthDate"
                render={(msg) => <Overlay>{msg}</Overlay>}
              ></ErrorMessage>
              <DatePickerField name="birthDate" value={userObj.birthDate} />
            </div>
            <InputText>:شماره ملی</InputText>
            <InputMain name="nationalId" />
            <InputText>:عکس پروفایل</InputText>
            <InputChoice
              name="profile"
              accept="image/*"
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </Left>
          <HolderBtn>
            <Bttn
              backColor="#09B28B"
              fontColor="#fff"
              fontSize="18px"
              name=" ثبت تغییرات "
              customStyle="float:left;margin:10px"
            />
          </HolderBtn>
        </Form>
      </Formik>
      <ToastContainer />
    </Holder>
  );
};

export default ProfileEdite;
