import React from 'react';
import { HoldError,ErorrMessage,NumbMessage } from './ErrorPage.style';
import Btn from '../button/Btn';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return ( 
        <HoldError>
            <ErorrMessage>E<span>r</span>ror</ErorrMessage>
            <NumbMessage>4<span>0</span><span>4</span></NumbMessage>
            <Link style={{textDecoration:'none',}} to="/"><Btn Mrg="10px auto" fontColor="#fff" backColor="#004458">بازگشت به صفحه ی اصلی</Btn></Link>
        </HoldError>
     );
}
 
export default ErrorPage;