import styles from './graphic.module.css';
import React from 'react';
import BarChart from "../BarChart/BarChart";




const Graphic = () => {


    return (<div className={styles.graphic}>
            <h3>Gráfica 1</h3>
            <div className={styles.pictureGraphic}>
                <BarChart/>
            </div>
            <h3>Gráfica 2</h3>
            <div className={styles.pictureGraphic}>
                <BarChart/>
            </div>
            <h3>Gráfica 3</h3>
            <div className={styles.pictureGraphic}>
                <BarChart/>
            </div>
            <h3>Gráfica 4</h3>
            <div className={styles.pictureGraphic}>
                <BarChart/>
            </div>
        </div>
    );
};

export default Graphic;
