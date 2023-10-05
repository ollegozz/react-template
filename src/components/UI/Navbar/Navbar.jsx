import React from 'react'
import { Link } from 'react-router-dom';
import '../../../App.css';
import About from '../../../pages/About'
import Posts from '../../../pages/Posts';

function Navbar() {
    return (
            <div className='navbar'>
                <div className='navbar__links'>
                    <Link to="/posts">Posts</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
    )

}

export default Navbar;
