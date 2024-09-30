import React from 'react'
import Form from './Form';
import Navbar from './Navbar';
import './VerticalNavbar.css';

const VerticalNavbar = ({ addContact }) => {
  return (
    <div className='vertical-nav'>
      <Navbar/>
      <Form addContact={addContact} />
    </div>
  )
}

export default VerticalNavbar