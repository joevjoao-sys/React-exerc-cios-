import React, { useState } from 'react';
import './App.css';

function InputTempoReal() {
  const[texto, SetTexto] = useState('');

  return (
    <div>
      <input
        tpe="text"
        value ={texto}
        onChange={((e) => SetTexto(e.target.value))}
        placeholder="digite algo..."
      />
      <p>Você digitou: {texto}</p>
    </div>
  );
}

export default InputTempoReal


