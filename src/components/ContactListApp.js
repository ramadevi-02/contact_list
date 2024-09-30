import React, { useState }from 'react'
import './ContactListApp.css';
import HorizontalNavbar from './HorizontalNavbar/HorizontalNavbar';
import NavbarAndContactList from './NavbarAndContactList/NavbarAndContactList';

const ContactListApp = () => {
    const [contacts, setContacts] = useState([]);

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };
    return (
        <div className='contact-list-app'>
            <HorizontalNavbar />
            <NavbarAndContactList contacts={contacts} addContact={addContact}/>
        </div>
    )
}

export default ContactListApp