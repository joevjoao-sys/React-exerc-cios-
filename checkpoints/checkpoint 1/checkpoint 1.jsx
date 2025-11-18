import React from "react";
import "./styles.css";

function DataHoraGalactica({ planetaDestino }) {
  const agora = new Date();
  const ciclos = [
    "Primeiro Ciclo",
    "Segundo Ciclo",
    "Terceiro Ciclo",
    "Quarto Ciclo",
    "Quinto Ciclo",
    "Sexto Ciclo",
    "Sétimo Ciclo",
  ];
  const sois = [
    "Sol de Hélion",
    "Sol de Cryo",
    "Sol de Veridia",
    "Sol de Aetheria",
    "Sol de Pyralia",
    "Sol de Aquaria",
    "Sol de Geon",
    "Sol de Umbra",
    "Sol de Lumina",
    "Sol de Chronos",
    "Sol de Astra",
    "Sol de Kaia",
  ];

  const cicloSemana = ciclos[agora.getDay()];
  const dia = agora.getDate() + 5; 
  const sol = sois[agora.getMonth()];
  const ano = agora.getFullYear() + 77; 

  return (
    <div className="widget data-hora">
      <h2>Referência Temporal: {planetaDestino}</h2>
      <p>{`Data: ${cicloSemana}, dia ${dia} do ${sol}, ano ${ano}`}</p>
    </div>
  );
}

function StatusMissao({ progresso }) {
  return (
    <div className="widget status-missao">
      <h2>Status da Missão</h2>
      <p>Progresso até o destino: {progresso}%</p>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progresso}%` }}></div>
      </div>
    </div>
  );
}

function PlanetaInfo({ planeta }) {
  const getClimaIcon = (condicao) => {
    if (condicao === "quente") return "☀️";
    if (condicao === "gelado") return "❄️";
    if (condicao === "temperado") return "🌍";
    return "❓";
  };

  return (
    <div className="widget planeta-info">
      <h2>
        Relatório do Planeta: {planeta.nome} {getClimaIcon(planeta.condicao)}
      </h2>
      <ul>
        <li>
          <strong>Temperatura Média:</strong> {planeta.temperatura}
        </li>
        <li>
          <strong>Gravidade:</strong> {planeta.gravidade}
        </li>
        <li>
          <strong>Descrição:</strong> {planeta.descricao}
        </li>
      </ul>
    </div>
  );
}

function PrevisaoTempoEspacial({ previsao }) {
  return (
    <div className="widget previsao-tempo">
      <h2>Previsão do Tempo Espacial</h2>
      <ul>
        <li>
          <strong>Clima:</strong> {previsao.clima} 🌪️
        </li>
        <li>
          <strong>Umidade Solar:</strong> {previsao.umidadeSolar} 💧
        </li>
        <li>
          <strong>Níveis de Radiação Cósmica:</strong>{" "}
          {previsao.radiacaoCosmica} ☢️
        </li>
      </ul>
    </div>
  );
}

function RelatorioDeBordo({ eventos }) {
  return (
    <div className="widget relatorio-bordo">
      <h2>Relatório de Bordo</h2>
      <ol>
        {eventos.map((evento, index) => (
          <li key={index}>{evento}</li>
        ))}
      </ol>
    </div>
  );
}

function DashboardEspacial({ comandante, missao }) {
  return (
    <div className="dashboard">
      <header>
        <h1>Painel do Comandante {comandante}</h1>
      </header>
      <main className="grid-container">
        <DataHoraGalactica planetaDestino={missao.planeta.nome} />
        <StatusMissao progresso={missao.status.progresso} />
        <PlanetaInfo planeta={missao.planeta} />
        <PrevisaoTempoEspacial previsao={missao.previsao} />
        <RelatorioDeBordo eventos={missao.relatorio} />
      </main>
    </div>
  );
}



function App() {
  const dadosDaMissao = {
    status: {
      progresso: 68,
    },
    planeta: {
      nome: "Kepler-186f",
      temperatura: "22°C (Estimada)",
      gravidade: "1.1g",
      condicao: "temperado",
      descricao:
        "Exoplaneta rochoso na zona habitável de uma estrela anã vermelha. Apresenta alta probabilidade de água líquida em sua superfície.",
    },
    previsao: {
      clima: "Tempestade de Íons Leve",
      umidadeSolar: "45%",
      radiacaoCosmica: "Baixa",
    },
    relatorio: [
      "Lançamento bem-sucedido da Estação Orbital Terra.",
      "Manobra de impulso translunar concluída.",
      "Primeira coleta de amostras de poeira de cometa.",
      "Sistema de navegação recalibrado após passagem por cinturão de asteroides.",
    ],
  };

  return (
    <div>
      <DashboardEspacial comandante="Joé João" missao={dadosDaMissao} />
    </div>
  );
}

export default App;
