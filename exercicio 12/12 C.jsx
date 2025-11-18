
import React, { useState } from 'react';
import './App.css'
function MedidorFelicidade() {
const [nivel, setNivel] = useState(0);

const expressoes = ['😐', '🙂', '😊', '😁', '🤩'];
const aumentarFelicidade = () => {
if (nivel < expressoes.length - 1) {
setNivel(nivel + 1);
}
};
return (
<div style={{ textAlign: 'center', padding: '20px' }}>
<h1 style={{ fontSize: '6rem', margin: '10px' }}>
{expressoes[nivel]}
</h1>
<p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
Nível de Felicidade: {nivel}
</p>
<button
onClick={aumentarFelicidade}
style={{
fontSize: '1.2rem',
padding: '12px 25px',
cursor: 'pointer',
borderRadius: '8px',
border: 'none',
backgroundColor: '#007bff',
color: 'white'
}}
disabled={nivel === expressoes.length - 1}
>
Sorrir
</button>
{nivel === expressoes.length - 1 && (
<p style={{ marginTop: '15px', color: '#007bff' }}>
Felicidade máxima!
</p>
)}
</div>
);
}

export default MedidorFelicidade;