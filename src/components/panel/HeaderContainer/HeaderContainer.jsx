import React from 'react';
import { Header } from './HeaderContainer.style';

const HeaderContainer = (props) => {
    return ( 
        <Header> : {props.children}</Header>
     );
}
 
export default HeaderContainer;