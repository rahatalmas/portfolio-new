import React from 'react';
import './Nav.css';
import {Link,Outlet} from 'react-router-dom';

const Nav = () =>{
    return(
        <div className='nav-main'>
           <nav className='nav-container'>
            <div className='logo'>
                <Link className='link' to='/'>Rahat Almas</Link>
            </div>
            <div className='link-container'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/blogs'>Blogs</Link>
            </div>
            <div className=''>
            </div>
        </nav>
        </div>
    );
}

export default Nav;