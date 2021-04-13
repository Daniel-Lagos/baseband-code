import styles from './info.module.css';
import React from 'react';


const Info = ({}) => {
    return (<div className={styles.info}>

            <div className={styles.group}>
                <label>Ingrese el caracter:</label>
                <br/>
                <input className={styles.input} type="text" name="caracter" />

            </div>
        </div>
    );
};

export default Info;