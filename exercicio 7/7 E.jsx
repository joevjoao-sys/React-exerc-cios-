import React, { useState } from 'react';

function GeradorDeSenha() {
  const [texto, setTexto] = useState('');


  const textoReverso = texto.split('').reverse().join('');
  const numeroDaSenha = texto.length * 2;

  return (
    <div>
      <h3>Componente: Gerador de Senha</h3>
      <h4>Digite uma palavra para ser a sua senha:</h4>
      <input
        type="text"
        value={texto}
        onChange={((e) => setTexto(e.target.value))}
        placeholder="Digite uma palavra-chave..."
      />

      {}
      {texto.length > 0 && (
        <>
          <h3>Sua senha especial é:</h3>
          <h2>
            {textoReverso}{numeroDaSenha}
          </h2>
        </>
      )}
    </div>
  );
}

export default GeradorDeSenha;