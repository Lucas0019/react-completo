import React, {useState, useEffect} from 'react'


const ComponenteMontou = () => {
  // O useEffect será especialmente utilizado quando precisamos definir um efeito
  //  que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.

  const [contar, setContar] = useState(0);
  const [dados, setDados] = useState(null);

  useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}

export default ComponenteMontou
