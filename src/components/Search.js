
import { MdSearch } from "react-icons/md";
import React, { Component }  from 'react';
const Search = ({ handleSearchNote }) => {
    return (<div className="search">
        <MdSearch className="search-icons" size='1.3em' />
        <input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="type to search..." />
    </div>
    );

}
export default Search;