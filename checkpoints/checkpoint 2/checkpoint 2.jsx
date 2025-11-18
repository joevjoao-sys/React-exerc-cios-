import React, { useState, useEffect } from "react";

const styles = {
  appContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    fontFamily: '"Lora", serif',
    backgroundColor: "#f5eeda",
    color: "#4a3c2f",
  },
  card: {
    border: "2px solid #c8b79b",
    borderRadius: "5px",
    padding: "15px",
    backgroundColor: "#faf0d7",
    minWidth: "320px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "3px 3px 5px rgba(0,0,0,0.1)",
  },
  button: {
    margin: "5px 0",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "1px solid #6b0000",
    cursor: "pointer",
    backgroundColor: "#800000",
    color: "#f5eeda",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  input: {
    padding: "8px",
    margin: "5px 0",
    borderRadius: "3px",
    border: "1px solid #c8b79b",
    backgroundColor: "#f5eeda",
    color: "#4a3c2f",
    width: "calc(100% - 16px)",
  },
  select: {
    padding: "8px",
    margin: "5px",
    borderRadius: "3px",
    border: "1px solid #c8b79b",
    backgroundColor: "#f5eeda",
    color: "#4a3c2f",
  },
  h2: {
    marginTop: 0,
    borderBottom: "2px solid #8B4513",
    paddingBottom: "5px",
    color: "#8B4513",
    fontFamily: '"Cinzel", serif',
  },
  listItem: {
    padding: "8px",
    borderBottom: "1px solid #dcd0b9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

function SistemaCombate() {
  const [vida, setVida] = useState(100);
  const vidaMaxima = 100;

  const progresso = Math.max(0, (vida / vidaMaxima) * 100);
  let corBarra;

  if (progresso < 30) corBarra = "#B22222";
  else if (progresso < 70) corBarra = "#DAA520";
  else corBarra = "#228B22";

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Sistema de Combate</h2>
      <h3>
        Vida: {vida} / {vidaMaxima} HP
      </h3>
      <div
        style={{
          width: "100%",
          height: "25px",
          backgroundColor: "#dcd0b9",
          borderRadius: "5px",
          overflow: "hidden",
          border: "1px solid #c8b79b",
        }}
      >
        <div
          style={{
            width: `${progresso}%`,
            height: "100%",
            backgroundColor: corBarra,
            transition: "all 0.5s ease",
          }}
        ></div>
      </div>
      {vida < 30 && vida > 0 && (
        <p style={{ color: "#B22222", fontWeight: "bold" }}>Vida crítica!</p>
      )}
      {vida <= 0 && (
        <p style={{ color: "#B22222", fontWeight: "bold" }}>
          VOCÊ FOI DERROTADO!
        </p>
      )}
      <div>
        <button
          style={styles.button}
          onClick={() => setVida((v) => Math.min(v + 10, vidaMaxima))}
          disabled={vida <= 0}
        >
          🧪 Curar (+10)
        </button>
        <button
          style={styles.button}
          onClick={() => setVida((v) => Math.max(v - 15, 0))}
          disabled={vida <= 0}
        >
          ⚔️ Dano (-15)
        </button>
      </div>
    </div>
  );
}

function SistemaNivel() {
  const [xp, setXp] = useState(0);
  const [nivel, setNivel] = useState(1);
  const xpParaUpar = 300;

  useEffect(() => {
    if (xp >= xpParaUpar) {
      setNivel(nivel + 1);
      setXp(xp - xpParaUpar);
    }
  }, [xp, nivel, xpParaUpar]);

  const progresso = (xp / xpParaUpar) * 100;

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Nível e Experiência</h2>
      <h3>Nível: {nivel}</h3>
      <p>
        XP: {xp} / {xpParaUpar}
      </p>
      <div
        style={{
          width: "100%",
          height: "25px",
          backgroundColor: "#dcd0b9",
          borderRadius: "5px",
          overflow: "hidden",
          border: "1px solid #c8b79b",
        }}
      >
        <div
          style={{
            width: `${progresso}%`,
            height: "100%",
            backgroundColor: "#DAA520",
            transition: "width 0.5s ease",
          }}
        ></div>
      </div>
      <p>{progresso.toFixed(1)}% para o próximo nível</p>
      <div>
        <button style={styles.button} onClick={() => setXp(xp + 100)}>
          Completar Missão (+100 XP)
        </button>
        <button style={styles.button} onClick={() => setXp(xp + 50)}>
          Derrotar Inimigo (+50 XP)
        </button>
      </div>
    </div>
  );
}

function Inventario() {
  const [aberto, setAberto] = useState(false);
  const items = [
    "Espada de Aço",
    "Poção de Cura",
    "Mapa do Tesouro",
    "Armadura Pesada",
  ];

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Inventário</h2>
      <button style={styles.button} onClick={() => setAberto(!aberto)}>
        {aberto ? "Fechar Mochila 🎒" : "Abrir Mochila 🎒"}
      </button>
      {aberto && (
        <div>
          <h4>Itens na Mochila:</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((item, index) => (
              <li key={index} style={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function DiarioDeMissoes() {
  const [missoes, setMissoes] = useState([
    {
      id: 1,
      texto: "Derrotar o Dragão da Montanha",
      categoria: "Principal",
      completa: false,
    },
    {
      id: 2,
      texto: "Coletar 10 ervas raras",
      categoria: "Secundária",
      completa: true,
    },
  ]);
  const [novaMissao, setNovaMissao] = useState("");
  const [categoria, setCategoria] = useState("Secundária");

  const addMissao = () => {
    if (novaMissao.trim() === "") return;
    const nova = {
      id: Date.now(),
      texto: novaMissao,
      categoria,
      completa: false,
    };
    setMissoes([...missoes, nova]);
    setNovaMissao("");
  };

  const toggleMissao = (id) => {
    setMissoes(
      missoes.map((m) => (m.id === id ? { ...m, completa: !m.completa } : m))
    );
  };

  const missoesConcluidas = missoes.filter((m) => m.completa).length;

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>
        Diário de Missões ({missoesConcluidas}/{missoes.length})
      </h2>
      <input
        style={styles.input}
        value={novaMissao}
        onChange={(e) => setNovaMissao(e.target.value)}
        placeholder="Nova missão..."
      />
      <select
        style={styles.select}
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option>Principal</option>
        <option>Secundária</option>
        <option>Urgente</option>
      </select>
      <button style={styles.button} onClick={addMissao}>
        Adicionar Missão
      </button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {missoes.map((m) => (
          <li
            key={m.id}
            style={{
              ...styles.listItem,
              cursor: "pointer",
              textDecoration: m.completa ? "line-through" : "none",
            }}
            onClick={() => toggleMissao(m.id)}
          >
            <span>
              [{m.categoria}] {m.texto}
            </span>
            <span>{m.completa ? "✅" : "🔲"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GeradorEncantamentos() {
  const [palavra, setPalavra] = useState("");
  const [encantamento, setEncantamento] = useState("");

  const gerar = () => {
    if (palavra.trim() === "") return;
    const invertida = palavra.split("").reverse().join("");
    setEncantamento(`✨ ${invertida.toUpperCase()} ✨`);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Gerador de Encantamentos</h2>
      <input
        style={styles.input}
        value={palavra}
        onChange={(e) => setPalavra(e.target.value)}
        placeholder="Palavra mágica base"
      />
      <button style={styles.button} onClick={gerar}>
        Gerar Encantamento
      </button>
      {encantamento && <h3>{encantamento}</h3>}
    </div>
  );
}

function RankingHerois() {
  const [herois, setHerois] = useState([
    { id: 1, nome: "lindson", classe: "Guerreiro", nivel: 8 },
    { id: 2, nome: "Beth", classe: "Mago", nivel: 10 },
    { id: 3, nome: "Hero", classe: "Arqueiro", nivel: 9 },
  ]);

  const handleNivelChange = (id, novoNivel) => {
    setHerois(
      herois.map((h) => (h.id === id ? { ...h, nivel: Number(novoNivel) } : h))
    );
  };

  const heroisOrdenados = [...herois].sort((a, b) => b.nivel - a.nivel);

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Ranking dos Heróis</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {heroisOrdenados.map((h, index) => (
          <li key={h.id} style={styles.listItem}>
            <span>
              {index + 1}º {h.nome} ({h.classe})
            </span>
            <span>
              Nível:{" "}
              <input
                type="number"
                value={h.nivel}
                onChange={(e) => handleNivelChange(h.id, e.target.value)}
                style={{ ...styles.input, width: "50px" }}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SistemaAtributos() {
  const [pontos, setPontos] = useState(10);
  const [attrs, setAttrs] = useState({
    Força: 0,
    Resistência: 0,
    Inteligência: 0,
    Sorte: 0,
  });

  const changeAttr = (attr, valor) => {
    if (pontos - valor >= 0 && attrs[attr] + valor >= 0) {
      setPontos(pontos - valor);
      setAttrs({ ...attrs, [attr]: attrs[attr] + valor });
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Atributos</h2>
      <h3>Pontos para distribuir: {pontos}</h3>
      {Object.keys(attrs).map((attr) => (
        <div key={attr} style={{ ...styles.listItem }}>
          <strong>
            {attr}: {attrs[attr]}
          </strong>
          <div>
            <button
              style={{ ...styles.button, padding: "5px 10px" }}
              onClick={() => changeAttr(attr, 1)}
              disabled={pontos <= 0}
            >
              +
            </button>
            <button
              style={{ ...styles.button, padding: "5px 10px" }}
              onClick={() => changeAttr(attr, -1)}
              disabled={attrs[attr] <= 0}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function PainelPersonagem({ nome, setNome }) {
  const [mostrarEfeitos, setMostrarEfeitos] = useState(false);

  return (
    <div style={{ ...styles.card, flexBasis: "100%", order: -1 }}>
      <h2 style={styles.h2}>
        Painel do Herói: {nome.toUpperCase() || "AVENTUREIRO SEM NOME"}
      </h2>
      <label>Nome do Personagem: </label>
      <input
        style={styles.input}
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <div>
        <label>Raça: </label>
        <select style={styles.select}>
          <option>Humano</option>
          <option>Elfo</option>
          <option>Anão</option>
        </select>
        <label>Classe: </label>
        <select style={styles.select}>
          <option>Guerreiro</option>
          <option>Mago</option>
          <option>Arqueiro</option>
        </select>
      </div>
      <button
        style={styles.button}
        onClick={() => setMostrarEfeitos(!mostrarEfeitos)}
      >
        {mostrarEfeitos
          ? "Esconder Efeitos de Status"
          : "Mostrar Efeitos de Status"}
      </button>
      {mostrarEfeitos && (
        <p>Efeitos Ativos: Fúria de Batalha 🔥, Regeneração Leve 💧</p>
      )}
    </div>
  );
}

function SistemaEconomico() {
  const [ouro, setOuro] = useState(50);
  const [lojaAberta, setLojaAberta] = useState(false);
  const itensLoja = [
    { nome: "Poção de Cura", preco: 15 },
    { nome: "Flechas de Prata (10x)", preco: 20 },
    { nome: "Pão de Viagem", preco: 5 },
  ];

  const comprar = (item) => {
    if (ouro >= item.preco) {
      setOuro(ouro - item.preco);
      alert(`Você comprou ${item.nome}!`);
    } else {
      alert("Ouro insuficiente!");
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Economia</h2>
      <h3>Ouro: {ouro} 💰</h3>
      <button style={styles.button} onClick={() => setOuro((o) => o + 25)}>
        Coletar Recompensa (+25)
      </button>
      <button style={styles.button} onClick={() => setLojaAberta(!lojaAberta)}>
        {lojaAberta ? "Fechar Loja" : "Abrir Loja"}
      </button>
      {lojaAberta && (
        <div>
          <h4>Itens à venda:</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {itensLoja.map((item) => (
              <li key={item.nome} style={styles.listItem}>
                <span>
                  {item.nome} - {item.preco} 💰
                </span>
                <button
                  style={{ ...styles.button, padding: "5px 10px" }}
                  onClick={() => comprar(item)}
                >
                  Comprar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [nomePersonagem, setNomePersonagem] = useState("");

  return (
    <div style={styles.appContainer}>
      <PainelPersonagem nome={nomePersonagem} setNome={setNomePersonagem} />
      <SistemaCombate />
      <SistemaNivel />
      <SistemaAtributos />
      <SistemaEconomico />
      <Inventario />
      <DiarioDeMissoes />
      <GeradorEncantamentos />
      <RankingHerois />
    </div>
  );
}
