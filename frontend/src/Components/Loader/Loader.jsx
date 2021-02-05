import React from 'react';
import styles from './loader.module.css'
function Loader(props) {
    return (
        <div className={styles.preloader}>
            <div className={styles.spinner}>
            </div>
      </div>
    );
}

export default Loader;