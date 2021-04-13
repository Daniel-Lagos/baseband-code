import styles from './title.module.css';
import React from 'react';
import TypeWriter from "react-typewriter";



const Title = ({}) => {

    return (<div className={styles.tittle}>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet"/>
            <div>
                <h1>CÓDIGO BANDABASE</h1>
            </div>

        </div>
    );
};

export default Title;