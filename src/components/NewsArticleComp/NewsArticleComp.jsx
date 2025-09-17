import React from 'react';
import { NewsItem, NewsImg, Matn, Label,HoverHolder } from './NewsArticleComp.style';
import Bttn from '../Common/Button2/Bttn';
import { useNavigate } from 'react-router-dom';
import ax from '../../assets/img/coursesItams/empty.png';

const NewsArticleComp = (props) => {
    const {_id,TopicType,pic,title}=props;
    const imageNews=pic.length>22?pic:ax;
    const navigate1=useNavigate();
    return ( 
        <NewsItem width={props.width}>
            <NewsImg src={imageNews} alt={title} />
            <HoverHolder>
                <Bttn backColor="#ffffffee"
                 fontColor="#004458"
                 width="90px"
                 height="40px"
                 name="مشاهده"
                 customStyle="margin:50px auto;"
                 onClick={()=>navigate1('/newsDetail/'+_id)} />
            </HoverHolder>
            <Matn>{title.length<=30?title:'...'+title.slice(0,30)}</Matn>
            <Label>{TopicType}#</Label>
        </NewsItem>
     );
}
 
export default NewsArticleComp;