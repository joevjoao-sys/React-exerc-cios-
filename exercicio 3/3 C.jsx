function MenuRestaurante() {
  const pratos = [
    {
      nome: "picanha da casa",
      preco: 65.00,
      descricao: "picanha suculenta e no precinho "
    },
    {
      nome: "Macarrão à Bolonhesa",
      preco: 39.90,
      descricao: "Um macarrão com o melhor tomate da região"
    },
    {
      nome: "lasanha",
      preco: 45.00,
      descricao: "lasanha com o queijo de primeira!"
    },
    {
      nome: "sorvete italiano",
      preco: 20.90,
      descricao: "sorvete de varios sabores e prazeses!"
    }
  ];

  return (
    <div>
      <h1>Cardápio do Restaurante Michelin</h1>
      <div className='menu-grid'>
        {pratos.map((prato, index) => (
          <div key={index} className='prato-card'>
            <h3>{prato.nome}</h3>
            <p className='preco'>R${prato.preco.toFixed(2)}</p>
            <p className='descricao'>{prato.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuRestaurante;