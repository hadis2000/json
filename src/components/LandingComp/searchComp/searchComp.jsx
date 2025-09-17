import React from 'react';
import { HoldItem, HoldText, Text, Title } from './searchComp.style';

import ax from '../../../assets/img/coursesItams/empty.png';

import { useNavigate } from 'react-router-dom';


const SearchComp = (props) => {
    const {_id,title,type,teacher,pic,text}=props;
    const image=pic.length>20?pic:ax;
    const navigate=useNavigate();

    return ( 
        <HoldItem onClick={()=>navigate(type=='1'?'/courseDetail/'+_id:'/newsDetail/'+_id)}>
            <img src={image} alt={title}/>
            <HoldText>
                <Title><span> :عنوان </span><span className='h'> {title.length<20?title:'...'+title.slice(0,20)} </span></Title>
                <Text><span>{type=='1'?'مدرس':'نوع'}:</span> {teacher} {{'article': 'مقاله','news': 'خبر'}[text]}</Text>
            </HoldText>
        </HoldItem>
     );
}
 
export default SearchComp;