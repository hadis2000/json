import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../../screens/Landing/Landing";
import PageHolder from "../../screens/pageHolder/PageHolder";
import ArticleAndNews from "../../screens/articleAndNews/AeticleAndNews";
import CoursesHolder from "../../screens/CoursesHolder/CoursesHolder";
import RegisterPage from "../../screens/authPage/RegisterPage";
import LoginPage from "../../screens/authPage/LoginPage";
import ForgetPassPage from "../../screens/authPage/ForgetPassPage";
import ErrorPage from "../../components/Common/errorPage/ErrorPage";
import CourseDetail from "../../screens/coursedetalis/coursedetalis";
import Article from "../../screens/article/article";
import AboutUs from "../../screens/AboutUs/AboutUs";
import CartPage from "../../screens/CartPage/CartPage";

import AdminAuth from "../../components/AdminAuth/AdminAuth";

function UnAuthenticatedApp() {
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgetPass" element={<ForgetPassPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/AdminAuth/:token" element={<AdminAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default UnAuthenticatedApp;
