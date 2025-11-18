import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CartaoPessoa({ nome, idade, profissao }) {
  return (
    <div className="Cartao-pessoa">
      <h2>{nome} </h2>
      <p>
        {" "}
        <strong>idade:</strong>
        {idade} anos
      </p>
      <p>
        <strong>profissao:</strong> {profissao}{" "}
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <CartaoPessoa nome="maria" idade={30} profissao="desenvolvedora" />
    </div>
  );
}

export default App;