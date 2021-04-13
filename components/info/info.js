import styles from './info.module.css';
import React from 'react';


const Info = ({}) => {

    return (<div className={styles.info}>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet"/>
            <div>
                <label className={styles.text}>Ingrese el caracter:</label>
            </div>
            <div>
                <label className={styles.text}>Convertido a binario:</label>
            </div>
            <div className={styles.input}>
                <div>
                    <input type="text" name="caracter"/>
                </div>
            </div>
            <div className={styles.text}>
                <p>010001011</p>
            </div>
            <div>
                <button className={styles.button}>Calcular</button>
            </div>
        </div>
    );
};

export default Info;