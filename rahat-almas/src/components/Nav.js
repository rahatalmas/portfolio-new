import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () =>{
    return(
        <nav className='nav-container'>
            <div className='logo'>
                <Link className='link' to='/'>Life of Almas</Link>
            </div>
            <div className='link-container'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/portfolio'>Portfolio</Link>
                <Link className='link' to='/blogs'>Blogs</Link>
            </div>
            <div className=''>
                 <Link className='link' to='/login'>Login</Link>
            </div>
        </nav>
    );
}

export default Nav;