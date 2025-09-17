import React, { useContext, useState } from "react";
import oicw from "../../../assets/img/pish.png";
import { Pishnahadat, Title, Axs, Holder } from "./pishnahad.style";
import Bttn from "../../Common/Button2/Bttn";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Overlay from "../../Common/overlay/Overlay";

import { IsLogged } from "../../../core/servises/context/IsLogged";
import { ContactUs } from "../../../core/servises/api/contactUs";
import { toast, ToastContainer } from "react-toastify";

const Validation = Yup.object().shape({
  email: Yup.string().email("ایمیل نامعتبر است").required("ایمیل را وارد کنید"),
  text: Yup.string().required("پیشنهاد یا انتقاد خود را وارد کنید"),
});

function Pishnahd() {
  const isLogged = useContext(IsLogged);
  const [userObj, setUserobject] = useState(isLogged.studentData);

  const onSubmit = async (values, { resetForm }) => {
    const result = await ContactUs(values);
    if (result) {
      toast.success(result);
      resetForm();
    } else toast.error("مشکلی پیش آمده دوباره سعی کنید");
  };

  return (
    <div>
      <Pishnahadat>
        <Axs src={oicw} alt={oicw}></Axs>
        <Holder>
          <Title>پیشنهاد و انتقاد</Title>
          <Formik
            initialValues={
              isLogged.currentLog
                ? { email: userObj.email, text: "" }
                : { email: "", text: "" }
            }
            onSubmit={onSubmit}
            validationSchema={Validation}
          >
            <Form>
              <div className="holderP">
                <ErrorMessage
                  name="email"
                  render={(msg) => <Overlay>{msg}</Overlay>}
                ></ErrorMessage>
                {isLogged.currentLog ? (
                  <Field name="email" type="hidden" value={userObj.email} />
                ) : (
                  <Field
                    className="emailP"
                    name="email"
                    type="email"
                    placeholder="...ایمیل خود را وارد کنید"
                  />
                )}
              </div>
              <br />
              <div className="holderP">
                <ErrorMessage
                  name="text"
                  render={(msg) => <Overlay>{msg}</Overlay>}
                ></ErrorMessage>
                <Field
                  as="textarea"
                  className="Matn"
                  name="text"
                  placeholder=".....متن خود را وارد کنید"
                />
              </div>
              <Bttn
                name=" ارسال "
                backColor="#fff"
                fontColor="#002d4b"
                fontSize="20px"
                customStyle="10px auto"
              />
            </Form>
          </Formik>
          <ToastContainer />
        </Holder>
      </Pishnahadat>
    </div>
  );
}

export default Pishnahd;
