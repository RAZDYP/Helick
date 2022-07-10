import React from 'react'
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap'


const Search = () => {
  return (
    <div className='search'>
      <div className='search-container'>
        <div className='search-headers'>
          <h1>FIND</h1>
          <p>Internet</p>
          <p>CCTV</p>
          <p>More</p>
        </div>
        <div className='search-bar'>
          <div className='search-location'>
            <h6>Location</h6>
            <span>Choose Your Location</span>
          </div>
          <div className='search-brand'>
            <h6>Brand</h6>
            <span>Choose</span>
          </div>
          <div className='search-price'>
            <h6>Price Range</h6>
            <span>
              Choose Price Range
              <button className='search-price-range'><FontAwesomeIcon className="faAngleDown" icon={faAngleDown} /></button>
            </span>
          </div>
          <div className='search-button'>
            <button className='search-button-create'><span>Create Requirement</span></button>
            <span>Or</span>
            <button className='search-button-icon'><FontAwesomeIcon className="faSearch" icon={faSearch} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;