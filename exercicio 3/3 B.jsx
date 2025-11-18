import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function listaHobbies() {
  const hobbies = ["Macarronada", "Nacho", "Polvo", "Stognoof de camarão"];
  return (
    <div>
      <h2> Meus Hobbies Faboritos </h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default listaHobbies;