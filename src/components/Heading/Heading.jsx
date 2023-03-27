import React from 'react';
import logo from '../../images/Logo.svg'
import './Heading.css'

const Heading = () => {
    return (
        <nav>
            <div className='header'>
                <img src={logo} alt="" />
                <div>
                    <a href="/Shop">Shop</a>
                    <a href="/order">Orders</a>
                    <a href="/inventory">inventory</a>
                    <a href="/login">login</a>
                </div>
            </div>
        </nav>
    );
};

export default Heading;