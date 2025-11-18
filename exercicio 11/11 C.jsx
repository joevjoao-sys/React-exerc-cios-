import { useState } from 'react'




function FormularioTempoReal() {
  const [dados, setDados] = useState({
    cep: '',
    estado: '',
    cidade: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({
      ...dados,
      [name]: value
    });
  }




  return (
    <div>
      <h2>Formulario</h2>
      <form>
        <div>
          <label>Cep :</label>
          <input
            type="number"
            name="cep"
            value={dados.cep}
            onChange={handleChange}
          />
        </div>




        <div>
          <label>Estado:</label>
          <input
            type="text"
            name="estado"
            value={dados.estado}
            onChange={handleChange}
          />




        </div>




        <div>
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={dados.cidade}
            onChange={handleChange}
          />
        </div>
      </form>




      <div>
        <h3>Dados preenchidos: </h3>
        <p><strong>cep: </strong> {dados.cep} </p>
        <p><strong>estado: </strong> {dados.estado} </p>
        <p><strong>cidade: </strong> {dados.cidade} </p>
      </div>
    </div>
  );
}
export default FormularioTempoReal

