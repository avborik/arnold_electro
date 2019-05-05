import React from 'react';
import style from './header.module.css'
import { Link } from 'react-router-dom';


import Nav from './nav/nav';

const Header = (props) => {
    

    return (
        <header >
            
           <div className="logo-wrapper"><h1 className="logo-text">Arnold electronics</h1></div>
           <Nav/>
           
        </header>
    )
}

export default Header;