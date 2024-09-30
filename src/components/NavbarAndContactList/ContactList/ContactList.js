import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts }) => {
    return (
        <div className='contact-list'>
            <table>
                <thead>
                    <tr>
                        <th><p>Profile</p></th>
                        <th><p>Name</p></th>
                        <th><p>Surname</p></th>
                        <th><p>Mobile</p></th>
                        <th><p>Actions</p></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index}>
                            <td>
                                <div className='profile-img-box'>
                                    <i className='fa-solid fa-user'></i>
                                </div>
                            </td>
                            <td><h2>{contact.name}</h2></td>
                            <td><h2>{contact.surname}</h2></td>
                            <td><h2>{contact.mobile}</h2></td>
                            <td>
                                <div>
                                    <i className='fa-solid fa-pen'></i>
                                    <i className='fa-solid fa-trash'></i>
                                    <i className='fa-solid fa-heart'></i>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactList;
