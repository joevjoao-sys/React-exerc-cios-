import React, { useState } from "react";

function InputContador() {
  const [texto, setTexto] = useState("");
  const limiteMaximo = 50;

  return (
    <div>
      <h3>Componente: Contador de Caracteres</h3>
      <input
        type="text"
        value={texto}
        onChange={((e) => setTexto(e.target.value))}
        placeholder="Digite algo..."
        maxLength={limiteMaximo}
      />
      <h2>Você digitou: {texto}</h2>
      <p>
        Total de Caracteres: {texto.length}/{limiteMaximo}
      </p>
    </div>
  );
}

export default InputContador;