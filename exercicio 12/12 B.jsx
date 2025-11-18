
import React, { useState } from 'react';
import './App.css'
function BotaoFavoritar() {
const [isFavoritado, setIsFavoritado] = useState(false);
const [contador, setContador] = useState(66);
const handleClick = () => {
if (isFavoritado) {
setContador(contador - 1);
setIsFavoritado(false);
} else {
setContador(contador + 1);
setIsFavoritado(true);
}
};
return (
<button
onClick={handleClick}
style={{
fontSize: '1.5rem',
padding: '10px 20px',
cursor: 'pointer',
border: '1px solid #ccc',
borderRadius: '8px'
}}
>
{isFavoritado ? '⭐' : '☆'}
{' '}{contador}
</button>
);
}
export default BotaoFavoritar;