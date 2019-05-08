import React from 'react';

import SlideShow from '../Widgets/Slider/slider';

import styles from './home.module.css'

const Home = () =>{
    return(
        <div className={styles.home_container}>
            Home Page
            <SlideShow/>
            
        </div>
    )
}

export default Home;