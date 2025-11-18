import React from 'react';

function PrevisaoTempo({ temperatura, clima, cidade, umidade }) {
  
  const getIcone = (clima) => {
    const climas = {
      ensolarado: "☀️",
      nublado: "☁️",
      chuvoso: "🌧️",
      tempestuoso: "⛈️",
      nevando: "❄️",
    };
    return climas[clima.toLowerCase()] || "☁️";
  };

  const getColorTemperatura = (temp) => {
    if (temp < 15) return "#4a90e2"; // Azul
    if (temp < 25) return "#f5a623"; // Laranja
    return "#d0021b";                // Vermelho
  };

  return (
    <div
      style={{
        border: "2px solid #ddd",
        borderRadius: "15px",
        padding: "25px",
        textAlign: "center",
        background: "linear-gradient(135deg, #74b9ff, #0984e3)",
        color: "white",
        maxWidth: "200px",
        minWidth: "200px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)" // Adicionei uma sombrinha para ficar mais bonito
      }}
    >
      <h2 style={{ margin: "0 0 15px 0" }}>{cidade}</h2>
      
      <div style={{ fontSize: "60px", margin: "10px 0" }}>
        {getIcone(clima)}
      </div>
      
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: getColorTemperatura(temperatura),
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        {temperatura}°C
      </div>
      
      <p style={{ fontSize: "18px", margin: "10px 0" }}>{clima}</p>
      <p style={{ fontSize: "14px", opacity: 0.9 }}>Umidade: {umidade}%</p>
    </div>
  );
}

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // CORRIGIDO AQUI (estava alegnItens)
    gap: "20px",
    marginTop: "50px",
    flexWrap: "wrap",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <PrevisaoTempo
        temperatura={31}
        clima="ensolarado"
        cidade="Rio de Janeiro"
        umidade={60}
      />
      
      <PrevisaoTempo
        temperatura={23}
        clima="nublado"
        cidade="São Paulo"
        umidade={30}
      />
      
      <PrevisaoTempo
        temperatura={10}
        clima="nevando"
        cidade="Curitiba"
        umidade={60}
      />
    </div>
  );
}

export default App;