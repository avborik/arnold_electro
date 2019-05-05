import React from 'react';

import styles from './home.module.css'

const Home = () =>{
    return(
        <div>
            Home Page
            <div className={styles.img_main}><img src="images/car.jpg" /></div>
            
        </div>
    )
}

export default Home;