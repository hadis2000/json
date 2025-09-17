import React from 'react';
import { SearchHolder } from './Search.style';
import { FaSearch } from "react-icons/fa";

const Search = (props) => {
    return ( 
        <SearchHolder>
            <label htmlFor='search'><FaSearch/></label>
            <input id='search' onChange={props.onChange} type={'text'} placeholder='جستجو کنید...'/>
        </SearchHolder>
     );
}
 
export default Search;