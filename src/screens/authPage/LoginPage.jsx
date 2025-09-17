import React from "react";
import ConstSection from "../../components/Auth/ConstSection/ConstSection";
import Login from "../../components/Auth/Login";
import { Holder } from "./AuthPage.style";

const LoginPage = () => {
    return ( 
        <Holder>
            <ConstSection/>
            <Login/>
        </Holder>
     );
}
 
export default LoginPage;