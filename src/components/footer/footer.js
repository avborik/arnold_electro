import React from 'react';
import styles from './footer.module.css';
import {Link} from 'react-router-dom';

import {CURRENT_YEAR} from '../../config';

const footer = () => (
        
    <div>footer
        <div className={styles.right}>
        &copy;Arnold electronics {CURRENT_YEAR}, All rights reserved.
            </div>
    </div>

    )

export default footer;