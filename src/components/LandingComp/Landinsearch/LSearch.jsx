import React, { useState,useEffect } from 'react';

import "./LSearch.css";

import SearchComp from '../searchComp/searchComp';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { GetNews } from "../../../core/servises/api/getNews";
import { GetCourses } from '../../../core/servises/api/getCourses';


const LSearch = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Newses, setNews] = useState([]);
    const [cour, setCour] = useState([]);
    const [search, setSearch] = useState([]);



    useEffect(()=>{
        const GetNewses = async () => {
            setNews(await GetNews());
        };
        const GetCour = async () => {
            setCour(await GetCourses());
        };
        GetNewses();
        GetCour();
    },[])

    const filteredNews=Newses.filter((val)=>{
            if(search==""){
                return val;
            } else if(val.title.includes(search)){
                return val;
            }
        });
    const filteredCourse=cour.filter((val)=>{
        if(search==""){
            return val;
        } else if(val.title.includes(search)){
            return val;
        }
    });

    return ( 
        <>
            <Modal autoFocus={false} size='xl' restoreFocus={false} 
            show={show} centered={true} scrollable={true}
            onHide={handleClose}>
            <Modal.Body>
                <Container>
                <Row>
                    <Col lg={6}>
                    <h3 className='ModalHead'>دوره ها</h3>
                    {(filteredCourse.length>0)&&search.length>0?filteredCourse.map(course=>(
                        <SearchComp key={course._id} type='1' 
                        title={course.title} teacher={course.teacher.fullName}
                        pic={course.lesson.image} _id={course._id}/>
                    )):<p className='NotFound'>موردی یافت نشد</p>}
                    </Col>
                    <Col lg={6}>
                    <h3 className='ModalHead'> اخبار و مقالات </h3>
                    {(filteredNews.length>0)&&search.length>0?filteredNews.map(news=>(
                        <SearchComp key={news._id} type='2' 
                        title={news.title} text={news.category}
                        pic={news.image} _id={news._id}/>
                    )):<p className='NotFound'>موردی یافت نشد</p>}
                    </Col>
                </Row>
                </Container>  
            </Modal.Body>          
            </Modal>
            <input className="inputla" onClick={handleShow} 
             onChange={(e)=>setSearch(e.target.value)} 
            type="search" placeholder='........جست و جو کنید' />
        </>
     );
}
 
export default LSearch;