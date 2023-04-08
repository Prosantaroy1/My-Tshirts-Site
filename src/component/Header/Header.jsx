import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='Header-Container'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/reviwe'>Order Review</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;