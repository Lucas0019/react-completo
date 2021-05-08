import React, {useState} from 'react'

// Utilizamos o React pela facilidade de sincronização do estado. 
// Antes dos Hooks, isso só era possível em componentes criados por meio de classes.

const Compras = () => {
  // useState é um Hook que define uma variável reativa

  // const [count, setCount] = React.useState(0); //Sem importar o useState
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Comprar: {count}</button>
      <p>Total: {count}</p>
      <p>Preço: R$ {count * 250}</p>
    </div>
  );
};


export default Compras
