import React from 'react';
import styles from './header.module.css'


import Nav from './nav/nav';

const Header = (props) => {
    

    return (
        <header >
            
           <div className="container" className={styles.logo}>
           <h1 className={styles.logo_text}>Arnold electronics</h1>
           
           <Nav/>
           </div>
        </header>
    )
}

export default Header;