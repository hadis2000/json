import React, { useState, useContext, useEffect } from "react";
import { Holder, MenuItems, Item, User, UserImg } from "./MenuHeader.style";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import { IsLogged } from "../../../core/servises/context/IsLogged";
import ax from "../../../assets/img/coursesItams/empty.png";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../../../core/servises/context/CartContext/CartContext";
import { Badge } from "react-bootstrap";

const MenuHeader = () => {
  const isLog = useContext(IsLogged);
  const [userObj, setUserObj] = useState(isLog.studentData);

  useEffect(() => {
    setUserObj(isLog.studentData);
  }, [isLog]);

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Holder>
      <Modal show={show} onHide={handleClose} centered>
        <img
          src={
            userObj.profile?.includes("http://res.cloudinary.com/")
              ? userObj.profile
              : ax
          }
        />
      </Modal>
      <MenuItems>
        <Link className="link" to="/">
          <Item>
            <HiOutlineHome className="icon" />
          </Item>
        </Link>
        <Link className="link" to="/courses">
          <Item> دوره ها </Item>
        </Link>
        <Link className="link" to="/articleAndNews">
          <Item> مقالات </Item>
        </Link>
        <Link className="link" to="/aboutus">
          <Item> درباره ی ما </Item>
        </Link>
        <Link to="/cart">
          <Item>
            <Badge bsPrefix className="badge_cart" bg="none">
              {cart.length}
            </Badge>
            <FaShoppingCart style={{ fontSize: "22px", color: "#088568" }} />
          </Item>
        </Link>
      </MenuItems>
      <User>
        <UserImg
          src={
            userObj.profile?.includes("http://res.cloudinary.com/")
              ? userObj.profile
              : ax
          }
          onClick={handleShow}
        />
        {userObj.fullName}
      </User>
    </Holder>
  );
};

export default MenuHeader;
