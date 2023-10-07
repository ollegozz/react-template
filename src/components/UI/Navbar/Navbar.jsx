import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import { AuthContext } from '../../../context';
// import About from '../../../pages/About'
// import Posts from '../../../pages/Posts';
import Button from '../Button/Button';

function Navbar() {

    const { isAuth, setIsAuth } = useContext(AuthContext)

    return (
            <div className='navbar'>                
                <div className='navbar__links'>
                    <Link to="/posts">Posts</Link>
                    <Link to="/about">About</Link>
                </div>
            <Button onClick={() => setIsAuth(false)}>Выйти</Button>
            </div>
    )

}

export default Navbar;
