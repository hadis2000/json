import React, { useContext } from "react";
import { GiBamboo } from "react-icons/gi";
import {
  MdOutlineDashboard,
  MdOutlineEdit,
  MdMenuBook,
  MdOutlineFormatListBulleted,
  MdOutlineClose,
  MdVpnKey,
} from "react-icons/md";
import { MenuRight, MenuHeader, Menu, Item } from "./MenuRight.style";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IsLogged } from "../../../core/servises/context/IsLogged";
import { clearStorage } from "../../../core/servises/storage/storage";

const MenuRightPanel = () => {
  const navigate = useNavigate();
  const isLog = useContext(IsLogged);
  const Location = useLocation();

  const exite = () => {
    clearStorage();
    isLog.chageLogged(false);
    isLog.HandleStu([]);
    navigate("/");
    isLog.HandleToast("به امید دیدار :)");
  };

  return (
    <MenuRight>
      <MenuHeader>
        <GiBamboo /> آکادمی آموزشی بامبو
      </MenuHeader>
      <MenuHeader bord="false"> پنل دانشجو </MenuHeader>
      <Menu>
        <Link className="link" to="/panel">
          <Item className={Location.pathname == "/panel" ? "selectMenu" : ""}>
            داشبورد <MdOutlineDashboard className="icon" />
          </Item>
        </Link>
        <Link className="link" to="ProfileEdite">
          <Item
            className={
              Location.pathname == "/panel/ProfileEdite" ? "selectMenu" : ""
            }
          >
            ویرایش پروفایل <MdOutlineEdit className="icon" />
          </Item>
        </Link>
        <Link className="link" to="changepass">
          <Item
            className={
              Location.pathname == "/panel/changepass" ? "selectMenu" : ""
            }
          >
            تغییر رمز عبور <MdVpnKey className="icon" />
          </Item>
        </Link>
        <Link className="link" to="MyCourses">
          <Item
            className={
              Location.pathname == "/panel/MyCourses" ? "selectMenu" : ""
            }
          >
            دوره های من <MdMenuBook className="icon" />
          </Item>
        </Link>
        <Link className="link" to="CoursesList">
          <Item
            className={
              Location.pathname == "/panel/CoursesList" ? "selectMenu" : ""
            }
          >
            لیست دوره ها <MdOutlineFormatListBulleted className="icon" />
          </Item>
        </Link>
        <Item onClick={exite}>
          خروج <MdOutlineClose className="icon" />
        </Item>
      </Menu>
    </MenuRight>
  );
};

export default MenuRightPanel;
