import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiBamboo } from "react-icons/gi";
import "./Header.style.css";
import { FaShoppingCart } from "react-icons/fa";

import { IsLogged } from "../../core/servises/context/IsLogged";
import ax from "../../assets/img/coursesItams/empty.png";

import { clearStorage, getItem } from "../../core/servises/storage/storage";
import { ImExit } from "react-icons/im";

import { Badge, Button, Dropdown } from "react-bootstrap";
import { CartState } from "../../core/servises/context/CartContext/CartContext";
import { AiFillDelete } from "react-icons/ai";
import jwt_decode from "jwt-decode";

function Header() {
  const navigate = useNavigate();
  const Location = useLocation();
  const isLog = useContext(IsLogged);
  const [userObj] = useState(isLog.studentData);
  var decoded = getItem("token") ? jwt_decode(getItem("token")) : "";

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const exite = () => {
    clearStorage();
    isLog.chageLogged(false);
    isLog.HandleStu([]);
    navigate("/");
    isLog.HandleToast("به امید دیدار :)");
  };

  return (
    <Navbar
      expand="md"
      variant="dark"
      dir="rtl"
      style={{
        fontSize: "20px",
        width: "100%",
        position: "absolute",
        zIndex: "1",
        fontFamily: "estedadM",
      }}
    >
      <Container fluid>
        <Navbar.Brand>
          <Link className="bambo" to="/">
            <GiBamboo /> بامبو
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
          style={{ opacity: "90%" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              بامبو <GiBamboo />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-center flex-grow-1"
              style={{ textAlign: "center" }}
            >
              <Link
                className={
                  Location.pathname == "/"
                    ? "link_Landing LocationCustom"
                    : "link_Landing "
                }
                to="/"
              >
                خانه
              </Link>
              <Link
                className={
                  Location.pathname == "/courses"
                    ? "link_Landing LocationCustom"
                    : "link_Landing "
                }
                to="/courses"
              >
                دوره ها
              </Link>
              <Link
                className={
                  Location.pathname == "/articleAndNews"
                    ? "link_Landing LocationCustom"
                    : "link_Landing "
                }
                to="/articleAndNews"
              >
                مقالات
              </Link>
              <Link
                className={
                  Location.pathname == "/aboutus"
                    ? "link_Landing LocationCustom"
                    : "link_Landing "
                }
                to="/aboutus"
              >
                درباره ی ما
              </Link>
              <Dropdown bsPrefix variant="none" className="Cart_Landing">
                <Dropdown.Toggle
                  variant="none"
                  className="Cart_toggel"
                  id="dropdown-basic"
                >
                  <Badge bsPrefix className="badge_cart" bg="none">
                    {cart.length}
                  </Badge>
                  <FaShoppingCart style={{ fontSize: "22px" }} />
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{ minWidth: 370, zIndex: "1 !important " }}
                >
                  {cart.length > 0 ? (
                    <>
                      {cart.map((cour) => (
                        <span className="cartItemH" key={cour._id}>
                          <img
                            src={
                              cour.lesson?.image.length > 20
                                ? cour.lesson.image
                                : ax
                            }
                            className="cartItemImgH"
                            alt={cour.title}
                          />
                          <div className="cartItemDetail">
                            <span>{cour.title}</span>
                            <span>{cour.cost}ت</span>
                          </div>
                          <AiFillDelete
                            fontSize="20px"
                            style={{ cursor: "pointer", color: "red" }}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: cour,
                              })
                            }
                          />
                        </span>
                      ))}
                      <Link to="/cart">
                        <Button
                          variant="success"
                          style={{ width: "95%", margin: "10px" }}
                        >
                          رفتن به سبد خرید
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Dropdown.Item style={{ textAlign: "center" }}>
                      سبد خرید خالی است
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <Nav style={{ textAlign: "right" }}>
              {isLog.currentLog ? (
                <>
                  {decoded.role === "admin" || decoded.role === "teacher" ? (
                    <>
                      <Link
                        className="link_Landing"
                        onClick={() => {
                          clearStorage();
                          isLog.chageLogged(false);
                          isLog.HandleStu([]);
                          window.location.href = "http://localhost:3001/";
                        }}
                      >
                        {userObj.fullName}
                        <img
                          src={
                            userObj.profile?.includes(
                              "http://res.cloudinary.com/"
                            )
                              ? userObj.profile
                              : ax
                          }
                          className="iconUser"
                        />
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        onClick={exite}
                        className="link_Landing"
                        title="خروج"
                      >
                        <ImExit className="iconHeader" />
                      </Link>
                      <Link className="link_Landing" to="/panel">
                        {userObj.fullName}
                        <img
                          src={
                            userObj.profile?.includes(
                              "http://res.cloudinary.com/"
                            )
                              ? userObj.profile
                              : ax
                          }
                          className="iconUser"
                        />
                      </Link>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Link className="link_Landing mx-2" to="/login">
                    ورود
                  </Link>
                  <Link className="link_Landing" to="/register">
                    ثبت نام
                  </Link>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
