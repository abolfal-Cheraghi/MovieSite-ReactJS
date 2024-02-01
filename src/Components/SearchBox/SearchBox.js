import React, { memo } from 'react'
import './SearchBox.css'
import { CiSearch } from "react-icons/ci";
 function SearchBox() {
  return (
    <div className="search-box">
      <CiSearch size="25px"/>
      <input type="search" placeholder='جستجو در سایت'/>
    </div>
  );
}


export default memo(SearchBox);