import React from "react";
import ConstSection from "../../components/Auth/ConstSection/ConstSection";
import ForgetPass from "../../components/Auth/ForgetPass";
import { Holder } from "./AuthPage.style";

const ForgetPassPage = () => {
  return (
    <Holder>
      <ConstSection />
      <ForgetPass />
    </Holder>
  );
};

export default ForgetPassPage;
