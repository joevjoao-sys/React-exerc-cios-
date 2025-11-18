import { useState } from 'react';




const isEmailValido = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};


function FormularioTempoReal() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    idade: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({
      ...dados,
      [name]: value
    });
  };




  const emailValido = isEmailValido(dados.email);


  const idadeValida = parseInt(dados.idade, 10) >= 18;




  return (
    <div>
      <h2>Formulário</h2>
      <form>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={dados.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="number"
            name="idade"
            value={dados.idade}
            onChange={handleChange}
          />
        </div>
      </form>


      <div>
        <h3>Dados preenchidos:</h3>
        <p><strong>Nome:</strong> {dados.nome}</p>
        <p><strong>Email:</strong> {dados.email}</p>
        <p><strong>Idade:</strong> {dados.idade}</p>




        {dados.nome && dados.email && dados.idade ? (
          emailValido && idadeValida ? (
            <p style={{ color: 'green' }}>Tudo está certinho!</p>
          ) : (
            <p style={{ color: 'red' }}>O email ou a idade está em formato incorreto (idade deve ser 18+).</p>
          )
        ) : null}
      </div>
    </div>
  );
}


export default FormularioTempoReal;
