import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHolder from "../../screens/pageHolder/PageHolder";
import Landing from "../../screens/Landing/Landing";
import ArticleAndNews from "../../screens/articleAndNews/AeticleAndNews";
import CourseDetail from "../../screens/coursedetalis/coursedetalis";
import CoursesHolder from "../../screens/CoursesHolder/CoursesHolder";
import HeaderAndMenu from "../../screens/panel/header_menu/HeaderAndMenu";
import CoursesList from "../../screens/panel/CoursesList";
import ChangePass from "../../screens/panel/ChangePass/ChangePass";
import Dashboard from "../../screens/panel/Dashboard/Dashboard";
import MyCourses from "../../screens/panel/MyCourses";
import ProfileEdite from "../../screens/panel/ProfileEdite/ProfileEdite";
import ErrorPage from "../../components/Common/errorPage/ErrorPage";
import Article from "../../screens/article/article";
import AboutUs from "../../screens/AboutUs/AboutUs";
import CartPage from "../../screens/CartPage/CartPage";
import jwt_decode from "jwt-decode";
import { getItem } from "../../core/servises/storage/storage";

function AuthenticatedApp() {
  var decoded = getItem("token") ? jwt_decode(getItem("token")) : "";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHolder />}>
          <Route index element={<Landing />} />
          <Route path="/articleAndNews" element={<ArticleAndNews />} />
          <Route path="/courses" element={<CoursesHolder />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courseDetail/:id" element={<CourseDetail />} />
          <Route path="/newsDetail/:id" element={<Article />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        {decoded.role === "admin" || decoded.role === "teacher" ? (
          <></>
        ) : (
          <>
            <Route path="/panel" element={<HeaderAndMenu />}>
              <Route index element={<Dashboard />} />
              <Route path="CoursesList" element={<CoursesList />} />
              <Route path="changepass" element={<ChangePass />} />
              <Route path="MyCourses" element={<MyCourses />} />
              <Route path="ProfileEdite" element={<ProfileEdite />} />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AuthenticatedApp;
