import React from 'react'
import '../styling/Navbar.css';
import logo from './logo.jpg';

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src={logo} alt="logo" />
            <div className='nav'>Home</div>
            <div className='nav'>Create</div>
            <div className='nav'>About</div>
        </div>
    );
}
