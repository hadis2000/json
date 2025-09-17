import React from 'react';
import { Holder } from './PageHolder.style';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

const PageHolder = () => {
    return ( 
        <Holder>
            <Header/>
            <Outlet/>
            <Footer/>
        </Holder>
     );
}
 
export default PageHolder;