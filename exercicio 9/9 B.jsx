import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function AlterarTamanhoFonte() {
  const [cor, setFonte] =useState('100px');

  const mudarFonte = (novaFonte) => {
    setFonte(novaFonte);
    document.body.style.fontSize = novaFonte;
  };

  return (
    <div>
      <h2> alterar cor de fundo</h2>
      <button onClick={() => mudarFonte('50px')}>small </button>
      <button onClick={() => mudarFonte('100px')}>mid</button>
      <button onClick={() => mudarFonte('200px')}>big</button>

    </div>
  );
}
export default AlterarTamanhoFonte;