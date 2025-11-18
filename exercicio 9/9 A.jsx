import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AlterarCorFundo() {
  const [cor, setCor] = useState('white');

  const mudarCor = (novaCor) => {
    setCor(novaCor);
    document.body.style.background = novaCor;
  };

  return (
    <div>
      <h2> alterar cor de fundo</h2>
      <button onClick={(() => mudarCor('lightblue'))}>Azul claro</button>
      <button onClick={(() => mudarCor('lightgreen'))}>verde</button>
      <button onClick={(() => mudarCor('lightcoral'))}>Coral Salmão</button>
      <button onClick={(() => mudarCor('white'))}>branco</button>
    </div>
  );
}

export default AlterarCorFundo