import React, { useState } from "react";


function Lista_Itens() {
  const items = [
    "ouro",
    "diamante",
    "camisa do flamengo",
    "disco de vinil",
    "fotografia de familia",
  ];


  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


function AbrirFechar() {
  const [abrir, setAbrir] = useState(true);


  return (
    <div>
      <div className="cofre">
        <p>Meu cofre</p>
      </div>
      <div>
        <p>🔒</p>
      </div>
      <div>
        <button onClick={() => setAbrir(!abrir)}>
          {abrir ? "fechar 🔒" : "abrir 🔓"}
        </button>
      </div>


      {abrir && <Lista_Itens />}
    </div>
  );
}


export default AbrirFechar;


