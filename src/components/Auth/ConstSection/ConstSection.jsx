import React from 'react';
import { Academi, Back,Holder,Addr,HomeIco } from './ConstSection.style';
import { TbBrandTelegram,TbBrandWhatsapp,TbBrandYoutube,TbBrandInstagram,TbHome } from "react-icons/tb";
import { GiBamboo } from "react-icons/gi";
import { Link } from 'react-router-dom';

const ConstSection = (props) => {
    return ( 
        <Back direc={props.direc}>
            <Link to="/"><HomeIco><TbHome/></HomeIco></Link>
            <Holder>
                <Academi>
                    <GiBamboo display={"block"} style={{margin:'0 auto'}}/> 
                    آکادمی آموزشی بامبو
                </Academi>
                <Addr><TbBrandInstagram/></Addr>
                <Addr><TbBrandTelegram/></Addr>
                <Addr><TbBrandWhatsapp/></Addr>
                <Addr><TbBrandYoutube/></Addr>
            </Holder>
        </Back>
     );
}
 
export default ConstSection;
