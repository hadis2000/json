import React, { useContext } from "react";
import { TextBox } from "./sendCommentComp.style";
import Bttn from "../Button2/Bttn";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Overlay from "../overlay/Overlay";

import { IsLogged } from "../../../core/servises/context/IsLogged";
import { getItem } from "../../../core/servises/storage/storage";
import { SendComment } from "../../../core/servises/api/sendComment";
import { toast, ToastContainer } from "react-toastify";

const Validation = Yup.object().shape({
  comment: Yup.string().required("لطفا نظر خود را وارد کنید"),
});

const SendCommentComp = (props) => {
  const isLogged = useContext(IsLogged);
  const userObj = JSON.parse(getItem("user"));

  const onSubmit = async (values, { resetForm }) => {
    values.postId = props.id;
    values.email = userObj.email;
    values.username = userObj.fullName;
    if (isLogged.currentLog) {
      const result = await SendComment(values);
      if (result) {
        toast.success(result);
        toast("کامنت شما بعد از تایید نمایش داده میشود");
        resetForm();
      } else toast.error("مشکلی پیش آمده دوباره سعی کنید");
    } else {
      toast.error(" ابتدا وارد حساب کاربری خود شوید ");
    }
  };
  return (
    <>
      <Formik
        initialValues={{ comment: "" }}
        onSubmit={onSubmit}
        validationSchema={Validation}
      >
        <Form style={{ position: "relative", marginTop: "30px" }}>
          <ErrorMessage
            name="comment"
            render={(msg) => <Overlay>{msg}</Overlay>}
          ></ErrorMessage>
          <Field
            as={TextBox}
            name="comment"
            id="comment"
            placeholder="...نظر شما "
          />
          <Bttn
            backColor="green"
            customStyle="margin:10px auto;"
            width="100%"
            name="ارسال پیام"
          />
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};

export default SendCommentComp;
