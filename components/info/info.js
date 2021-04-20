import Styles from './info.module.css';
import React from 'react';
import Logic, {stringToBinary} from "../logic/logic";


const Info = () => {
    const handleInputChange = () =>{
        //stringToBinary("a");
        console.log(stringToBinary("a"));
    }
  return (<div className={Styles.info}>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
        rel="stylesheet"/>
      <div className={Styles.inputContent}>
        <div className={Styles.input}>
          <label className={Styles.text}>Ingrese el caracter:</label>
          <input type="text" name="caracter" onChange={handleInputChange} placeholder={'Digita un caracter'}/>
        </div>
        <div className={Styles.input}>
          <label className={Styles.text}>Convertido a binario:</label>
          <label className={Styles.text}>010001011</label>
        </div>
      </div>
      <button className={Styles.button} onClick="stringToBinary()">Calcular</button>
    </div>
  );
};

export default Info;
