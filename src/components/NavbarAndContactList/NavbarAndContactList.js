import React from 'react'
import ContactList from './ContactList/ContactList';
import './NavbarAndContactList.css';
import VerticalNavbar from './VerticalNavbar/VerticalNavbar';

const NavbarAndContactList = ({ contacts, addContact }) => {
  return (
    <div className='navbar-and-list'>
      <VerticalNavbar addContact={addContact}/>
      <ContactList  contacts={contacts} />
    </div>
  )
}

export default NavbarAndContactList