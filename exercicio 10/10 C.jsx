
import { useState } from 'react';
import './App.css';
const taxasParaBRL = {
BRL: 1.00,
USD: 5.39,
EUR: 6.25,
};
function ConversorDeMoedas() {
const [valor, setValor] = useState('');
const [moedaOrigem, setMoedaOrigem] = useState('BRL');
const [moedaDestino, setMoedaDestino] = useState('USD');
const [resultado, setResultado] = useState(null);
const handleConversao = () => {
const valorNum = parseFloat(valor);
if (isNaN(valorNum) || valorNum <= 0) {
setResultado('Erro: Insira um valor válido');
return;
}
if (moedaOrigem === moedaDestino) {
setResultado(`Resultado: ${valorNum.toFixed(2)}
${moedaDestino}`);
return;
}

const valorEmBRL = valorNum * taxasParaBRL[moedaOrigem];
const valorFinal = valorEmBRL / taxasParaBRL[moedaDestino];
const resultadoFormatado = `${valorNum.toFixed(2)} ${moedaOrigem} =
${valorFinal.toFixed(2)} ${moedaDestino}`;
setResultado(resultadoFormatado);
};
const limpar = () => {
setValor('');
setResultado(null);
setMoedaOrigem('BRL');
setMoedaDestino('USD');
};
return (
<div className="calculadora-container">
<h1>Conversor de Moedas</h1>
<div className="conversor-body">
<div className="input-group">
<label htmlFor="valor">Valor:</label>
<input
id="valor"
type="number"
value={valor}
onChange={(e) => setValor(e.target.value)}
placeholder="Digite o valor"
/>
</div>
<div className="input-group">
<label htmlFor="origem">De:</label>
<select
id="origem"
value={moedaOrigem}
onChange={(e) => setMoedaOrigem(e.target.value)}
>
<option value="BRL">Real (BRL)</option>
<option value="USD">Dólar (USD)</option>
<option value="EUR">Euro (EUR)</option>
</select>

</div>
<div className="input-group">
<label htmlFor="destino">Para:</label>
<select
id="destino"
value={moedaDestino}
onChange={(e) => setMoedaDestino(e.target.value)}
>
<option value="BRL">Real (BRL)</option>
<option value="USD">Dólar (USD)</option>
<option value="EUR">Euro (EUR)</option>
</select>
</div>
</div>
<div className="botoes-container">
<button onClick={handleConversao}
className="botao-principal">Converter</button>
<button onClick={limpar}
className="botao-limpar">Limpar</button>
</div>
{resultado !== null && (
<h3 className="resultado">
{resultado}
</h3>
)}
</div>
);
}
export default ConversorDeMoedas;