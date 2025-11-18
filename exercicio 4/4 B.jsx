import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CartaoLivro({ titulo, autor, ano, genero }) {
  return (
    <div className="Cartao-livro">
      <h2>{titulo} </h2>
      <p>
        { " " }
        <strong>autor:</strong>
        {autor}
      </p>
      <p><strong>ano :</strong> {ano}{" "}</p>
      <p><strong>gênero:</strong> {gênero}{" "}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <CartaoLivro
        titulo="rumo ao Farol"
        autor="Virginia woolf"
        ano={1995}
        gênero="drama"
      />
    </div>
  );
}

export default App;