
import { useState } from 'react';
import './App.css';
function Calculadora() {
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');
const [resultado, setResultado] = useState(null);
const handleOperacao = (operador) => {
const n1 = parseFloat(num1);
const n2 = parseFloat(num2);
if (isNaN(n1) || isNaN(n2)) {
setResultado('Erro: Insira números válidos');
return;
}
let res;
switch (operador) {

case '+':
res = n1 + n2;
break;
case '-':
res = n1 - n2;
break;
case '*':
res = n1 * n2;
break;
case '/':
if (n2 === 0) {
setResultado('Erro: Divisão por zero');
return;
}
res = n1 / n2;
break;
default:
return;
}
setResultado(res);
};
const limpar = () => {
setNum1('');
setNum2('');
setResultado(null);
};
return (
<div className="calculadora-container">
<h1>Calculadora Simples</h1>
<div className="inputs-container">
<input
type="number"
value={num1}
onChange={(e) => setNum1(e.target.value)}
placeholder="Primeiro número"
/>
<input
type="number"
value={num2}

onChange={(e) => setNum2(e.target.value)}
placeholder="Segundo número"
/>
</div>
<div className="botoes-container">
<button onClick={() => handleOperacao('+')}>+</button>
<button onClick={() => handleOperacao('-')}>-</button>
<button onClick={() => handleOperacao('*')}>*</button>
<button onClick={() => handleOperacao('/')}>/</button>
<button onClick={limpar}
className="botao-limpar">Limpar</button>
</div>
{resultado !== null && (
<h3 className="resultado">
Resultado: {resultado}
</h3>
)}
</div>
);
}
export default Calculadora;