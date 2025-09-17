import React from 'react';
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Holder,HolderLeft,Contain} from './HeaderAndMenu.style';
import MenuRightPanel from '../../../components/panel/MenuRight/MenuRight';
import MenuHeader from '../../../components/panel/MenuHeader/MenuHeader';
import { Outlet } from 'react-router-dom';

const HeaderMenu = () => {
    return ( 
        <Holder>
            <MenuRightPanel/>
            <HolderLeft>
                <MenuHeader/>
                <Contain>
                    <Outlet/>
                </Contain>
            </HolderLeft>
        </Holder>
     );
}
 
export default HeaderMenu;