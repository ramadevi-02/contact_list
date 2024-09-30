import React from 'react'
import Button from '../Ui/Button';
import './HorizontalNavbar.css';

const HorizontalNavbar = () => {
  return (
    <div className='horizontal-nav'>
      <div className='profile'>
        <div className='profile-img-box'>
          <i className='fa-solid fa-user'></i>
        </div>
        <h2>Contact List</h2>
      </div>
      <form className='search-box'>
        <input type='text' placeholder='Enter name' />
        <Button name='Search' />
      </form>
    </div>
  )
}

export default HorizontalNavbar