import React, { useState } from 'react';
import "./Form.css";
import addnewImage from "../../../assets/add-new.svg";
import Button from '../../Ui/Button.js';

const Form = ({ addContact }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact({ name, surname, mobile });
        setName('');
        setSurname('');
        setMobile('');
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='add-new-img'>
                <img src={addnewImage} alt="Add New" />
            </div>
            <div className='input-text'>
                <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Surname'
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
            </div>
            <div className='input-tel'>
                <input
                    type='text'
                    placeholder='Mobile Num'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
            </div>
            <Button name='Add' />
        </form>
    );
}

export default Form;
