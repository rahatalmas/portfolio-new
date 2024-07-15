import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () =>{
    return(
        <nav className='nav-container'>
            <div className='logo'>
                <Link className='link' to='/'>Logo</Link>
            </div>
            <div className='link-container'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/experience'>Experiences</Link>
                <Link className='link' to='/cv'>Research</Link>
                <Link className='link' to='/portfolio'>Achievements</Link>
                <Link className='link' to='/cv'>CV</Link>
            </div>
            <div className=''>
            </div>
        </nav>
    );
}

export default Nav;