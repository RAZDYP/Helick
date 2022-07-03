import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='Search'>
        <div className='location'>
        Location
         <h6>Choose Your Location</h6></div>
        <div className='brand'>Brand
        <h6>Choose</h6></div>
        <div className='price'>Price Range
        <h6>Choose Price Range</h6></div>
        <div className='req_btn'>
            <button> Create requirement</button>
        </div>
        <div className='search_icon'>
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/search.png' alt="search"/>
        </div>

    </div>
  )
}

export default Search;