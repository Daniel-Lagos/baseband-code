import styles from './graphic.module.css';
import React from 'react';

const Graphic = () => {

  return (<div className={styles.graphic}>
      <h3>Gráfica 1</h3>
      <div className={styles.pictureGraphic}><p>Acá iría la gráfica 📈</p></div>
      <h3>Gráfica 2</h3>
      <div className={styles.pictureGraphic}><p>Acá iría la gráfica 📈</p></div>
      <h3>Gráfica 3</h3>
      <div className={styles.pictureGraphic}><p>Acá iría la gráfica 📈</p></div>
      <h3>Gráfica 4</h3>
      <div className={styles.pictureGraphic}><p>Acá iría la gráfica 📈</p></div>
    </div>
  );
};

export default Graphic;
