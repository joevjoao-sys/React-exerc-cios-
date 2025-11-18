import React, { useState } from 'react';
import './App.css';

function InputTempoReal() {
  const[texto, SetTexto] = useState('');
  const TextoM = texto.length;

  return (
    <div>
      <input
        tpe="text"
        value ={texto}
        onChange={((e) => SetTexto(e.target.value))}
        placeholder="digite algo..."
      />
      <h2>Você digitou: {texto}</h2>
      {TextoM > 0 && TextoM < 3 && (
        <h1>Digite pelo menos 3 caract</h1>
      )}
    </div>
  );
}

export default InputTempoReal