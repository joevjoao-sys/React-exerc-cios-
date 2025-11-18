import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function BoasVindas({ usuario }) {
  return <h1> Bem vindo de volta, {usuario} </h1>;
}

export default function MyApp() {
  return <BoasVindas usuario="JOÉ JOÃO" />;
}