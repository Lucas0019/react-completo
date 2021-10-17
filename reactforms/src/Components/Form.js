import React, { useState} from 'react'

/**
 * No form controlamos o que acontece ao enviar o mesmo, 
 * por isso definimos uma função para lidar com o onSubmit. 
 * O preventDefault() irá prevenir o comportamento padrão, 
 * que seria de atualizar a página, 
 * enviando uma requisição para o que estiver em action="".
 */

const Form = () => {
  const [nome, setNome] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};


export default Form
