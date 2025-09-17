import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import "./Comment.css";

import {
  AiFillLike,
  AiFillDislike,
  AiFillExclamationCircle,
  AiOutlineComment,
  AiOutlineUser,
} from "react-icons/ai";
import { Button, Col, Row } from "react-bootstrap";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Overlay from "../overlay/Overlay";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { getItem } from "../../../core/servises/storage/storage";
import { AnswerComment } from "../../../core/servises/api/answerToMessage";

const Validation = Yup.object().shape({
  answer: Yup.string().required("لطفا نظر خود را وارد کنید"),
});

const Comment = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { date, username, comment, answer, id, handleComment } = props;
  var decoded = getItem("token") ? jwt_decode(getItem("token")) : "";

  const onSubmit = async (val, { resetForm }) => {
    const obj = { id: id, answer: val.answer };
    const result = await AnswerComment(obj);
    toast.success(result.message);
    handleComment();
    resetForm();
    setShowAnswer(false);
  };
  const ShowAnswerButton = () => {
    if (decoded.role === "admin" || decoded.role === "teacher") {
      setShowAnswer(!showAnswer);
    } else {
      toast.error("امکان پاسخگویی تنها برای کارمندان امکان پذیر است");
    }
  };

  return (
    <>
      <Card dir="rtl" className="my-4" bg="light" key="light" text="dark">
        <Card.Header className="CommentHeader">
          <Figure className="CommentImage mx-2">
            <AiOutlineUser className="imageC" />
          </Figure>
          <Card.Title className="titleComment">{username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted commentDate">
            {date.slice(0, 10)}
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text style={{ fontFamily: "estedadM" }}>{comment}</Card.Text>
          <Card.Text dir="ltr" className="CommentFunctions">
            <AiOutlineComment
              onClick={ShowAnswerButton}
              style={{ color: "#004458" }}
            />
            <span>
              <AiFillLike />
              24
            </span>
            <span>
              <AiFillDislike />4
            </span>
            <AiFillExclamationCircle style={{ color: "red" }} />
          </Card.Text>
        </Card.Body>
      </Card>
      {/* answer */}
      <Row style={showAnswer ? { display: "block" } : { display: "none" }}>
        <Col>
          <Formik
            initialValues={{ answer: "" }}
            onSubmit={onSubmit}
            validationSchema={Validation}
          >
            <Form style={{ position: "relative", marginTop: "30px" }}>
              <ErrorMessage
                name="answer"
                render={(msg) => <Overlay>{msg}</Overlay>}
              ></ErrorMessage>
              <Field
                as="textarea"
                name="answer"
                id="answer"
                placeholder="...پاسخ شما "
                className="textareaaAnswer"
              />
              <Button
                style={{ margin: "0 20px" }}
                type="submit"
                variant="success"
              >
                ارسال پاسخ
              </Button>
              <Button
                style={{ width: "100px" }}
                onClick={() => setShowAnswer(false)}
                variant="danger"
              >
                لغو
              </Button>
            </Form>
          </Formik>
        </Col>
      </Row>

      {answer ? (
        <Card dir="rtl" className="my-4" style={{ width: "85%" }}>
          <Card.Header className="answerHeader">
            <Figure className="CommentImage mx-2">
              <AiOutlineUser className="imageC" />
            </Figure>
            <Card.Title className="titleAnswer">Admin</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>{answer}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default Comment;
