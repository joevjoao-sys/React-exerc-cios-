
function StatusJogo({nivel, pontos}) {
const maxPontos = nivel * 1000;
const progresso = Math.min((pontos/maxPontos) * 100, 100);
const corBarra = progresso < 30 ? "red" : progresso < 70 ? "orange" :
"green";
return (
<div style={{padding: "20px"}}>
<h2>Nível {nivel}</h2>
<p>Pontos: {pontos} / {maxPontos}</p>
<div style={{
width: "200px",
height: "20px",
backgroundColor: "#ddd",
borderRadius: "10px",
overflow: "hidden"
}}>
<div style={{
width: `${progresso}%`,
height: "100%",
backgroundColor: corBarra,
transition: "all 0.3 ease",
}}></div>
</div>
<p>{progresso.toFixed(1)}% completo</p>
</div>
);
}

export default function Myapp() {
return <StatusJogo nivel={5} pontos={2500}/>
}