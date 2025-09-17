import React from 'react';
import ConstSection from "../../components/Auth/ConstSection/ConstSection";
import Register from "../../components/Auth/Register";
import { Holder } from "./AuthPage.style";

const RegisterPage = () => {
    return (  
        <Holder>
            <ConstSection direc="left"/>
            <Register/>
        </Holder>
    );
}
 
export default RegisterPage;