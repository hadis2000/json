import React from 'react';
import _, { property } from 'lodash';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';
import './pagination.css';


const PaginationStyle = (props) => {
    const {itemsCount,pageSize,onPageChange,currentPage}=props;
    const pagesCount=Math.ceil(itemsCount/pageSize);
    if(pagesCount===1) return null;
    const pages=_.range(1,pagesCount+1);
    return ( 
        <Pagination bsPrefix className="d-flex justify-content-center">
            <Pagination.Prev className='customArrow' />
            {pages.map(page=>(
                <Pagination.Item className={page===currentPage?'mx-1 activ':'mx-1 custom'} key={page}
                 onClick={()=>onPageChange(page)}
                 >{page}</Pagination.Item>
            ))}
            <Pagination.Next className='customArrow' />
        </Pagination>
     );
}
 Pagination.prototype={
    itemsCount:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired
 };
export default PaginationStyle;