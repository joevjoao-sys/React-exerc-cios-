import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css';


function Saudacao({ usuario }) {
  return <h1> boas vindas , {usuario}! </h1>;
}

export default function Myapp() {
  
  return <Saudacao usuario="Joé Ramos Vianna João" />;
}