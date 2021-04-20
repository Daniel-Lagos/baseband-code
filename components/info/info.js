import Styles from './info.module.css';
import React, { useState } from 'react';
import { stringToBinary } from '../logic/logic';


const Info = () => {
  const [character, setCharacter] = useState('');
  const [binaryCharacter, setBinaryCharacter] = useState('');

  return (<div className={Styles.info}>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
        rel="stylesheet"/>
      <div className={Styles.inputContent}>
        <div className={Styles.input}>
          <label className={Styles.text}>Ingrese el caracter:</label>
          <input type="text" name="character" value={character}
                 onChange={(e) => {
                   setCharacter(e.target.value);
                   setBinaryCharacter(stringToBinary(character));
                 }} placeholder={'Digita un caracter'}/>
        </div>
        <div className={Styles.input}>
          <label className={Styles.text}>Convertido a binario:</label>
          <label className={Styles.text}>{binaryCharacter}</label>
        </div>
      </div>
      <button className={Styles.button} onClick="stringToBinary()">Calcular
      </button>
    </div>
  );
};

export default Info;
