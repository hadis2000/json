import React, { useState, useEffect, useContext } from "react";
import { CartEmpty, HoldBody, HoldHeader } from "./CartPage.style";

import HeadAx from "../../assets/img/aboutUs/about1_2.jpg";
import { CartState } from "../../core/servises/context/CartContext/CartContext";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Bttn from "../../components/Common/Button2/Bttn";
import ax from "../../assets/img/coursesItams/empty.png";

import { IsLogged } from "../../core/servises/context/IsLogged";
import { AddStuToCourse } from "../../core/servises/api/addStuToCourse";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import imageCart from "../../assets/img/cart2.png";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getItem } from "../../core/servises/storage/storage";

const CartPage = () => {
  const isLog = useContext(IsLogged);
  const [userObj] = useState(isLog.studentData);
  var decoded = getItem("token") ? jwt_decode(getItem("token")) : "";

  const [total, setTotal] = useState();
  const {
    state: { cart },
    dispatch,
  } = CartState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.cost), 0));
  }, [cart]);

  const shopping = () => {
    if (decoded.role === "admin" || decoded.role === "teacher") {
      toast.error("خرید فقط برای دانشجو امکان پذیر است");
    } else {
      if (isLog.currentLog) {
        {
          cart.map(async (cour) => {
            const obj = { courseId: cour._id, userId: userObj._id };
            const result = await AddStuToCourse(obj);
            if (result.message[0].eventId == 200) {
              toast.success(result.message[0].message);
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: cour,
              });
            } else {
              toast.error("مشکلی پیش آمده لطفا دوباره سعی کنید");
            }
          });
        }
      } else toast.error("ابتدا وارد حساب کاربری خود شوید");
    }
  };

  return (
    <>
      <HoldHeader>
        <img src={HeadAx} alt={HeadAx} />
      </HoldHeader>
      <HoldBody>
        <Row>
          <Col md={4}>
            <Card style={{ margin: "30px 0 30px 30px" }}>
              <Card.Header className="headerCart">مجموع</Card.Header>
              <Card.Body>
                <Row className="rowCart">
                  <Col>{total}ت</Col>
                  <Col className="colCart">قیمت کل</Col>
                </Row>
                <Row className="rowCart">
                  <Col>{cart.length}</Col>
                  <Col className="colCart">تعداد آیتم</Col>
                </Row>
                <Row>
                  <Bttn
                    onClick={shopping}
                    disabled={cart.length === 0}
                    name="اتمام خرید"
                  />
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card style={{ margin: "30px 30px 30px 0", textAlign: "right" }}>
              <Card.Header className="headerCart">سبد خرید</Card.Header>
              <Card.Body>
                {cart.length > 0 ? (
                  cart.map((cour) => (
                    <Card key={cour._id} style={{ marginBottom: "10px" }}>
                      <Card.Body>
                        <Row>
                          <Col xs={9}>
                            <Row>
                              <Col className="deleteCartShopping">
                                <AiFillDelete
                                  className="icondelC"
                                  onClick={() =>
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: cour,
                                    })
                                  }
                                />
                              </Col>
                              <Col className="CartText">
                                <span> نام دوره : </span>
                                {cour.title}
                              </Col>
                            </Row>
                            <Row>
                              <Col className="CartText">
                                <span>قیمت :</span> {cour.cost} تومان
                              </Col>
                            </Row>
                            <Row>
                              <Col className="CartText">
                                <span>مدرس :</span> {cour.teacher.fullName}
                              </Col>
                            </Row>
                          </Col>
                          <Col className="cartImg" xs={3}>
                            <img
                              src={
                                cour.lesson?.image.length > 20
                                  ? cour.lesson.image
                                  : ax
                              }
                            />
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <CartEmpty>
                    <img src={imageCart} />
                    <h4> سبد خرید خالی است</h4>
                    <Link to="/courses">
                      <Button variant="success">افزودن دوره جدید</Button>
                    </Link>
                  </CartEmpty>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </HoldBody>
    </>
  );
};

export default CartPage;
