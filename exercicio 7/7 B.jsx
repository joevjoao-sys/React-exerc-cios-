import React, { useState } from 'react';
import './App.css';

function InputTempoReal() {
  const[texto, SetTexto] = useState('');
  const a = texto.toUpperCase()

  return (
    <div>
      <input
        tpe="text"
        value ={texto}
        onChange={((e) => SetTexto(e.target.value))}
        placeholder="digite algo..."
      />
      <h2>Você digitou: {a}</h2>
    </div>
  );
}

export default InputTempoReal