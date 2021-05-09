import React from "react";

const JSX = () => {
  // Expressões e variáveis podem ser colocadas dentro do JSX, utilizando chaves {}.
  const name = 'Lucas Xavier'
  const desconto = 50;
  const preco = 250;
  const ativo = true


  // Funções

  // Você pode executar qualquer expressão dentro das chaves {}. 
  // Se o resultado da expressão for um número, string ou array de números/strings 
  // o resultado irá aparecer na tela. Booleanos (true/false), undefined e null 
  // não irão resultar em nada na tela. Objetos irão retornar um erro.
  function meuNome() {
    return 'Santos';
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  };

  // Também posso atribuir JSX direto a uma constante/variável
  const Titulo = <h1>Meu título</h1>;

  return (
    <>
      { Titulo }

      <section>
        <p>{'MINHA EMPRESA'.toLowerCase()}</p>
        <p>{30 * 2}</p>
        <p>{true}</p> 
        <p>{undefined}</p>
        <p>{(() => 'Função Executada')()}</p>
        <p>{meuNome()}</p>
        <p>{quadrado(2)}</p>
        <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
        <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
        <p>{Date.now()}</p>
        <p>{new Date().getFullYear()}</p>
        
        <p>
          Marca: {carro.marca}, 
          Rodas: {carro.rodas}
        </p>
      </section>  
      
      <section>
        <p>{ name }</p>
        <p>R$ {preco - desconto}</p>
        <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>
      </section>

      <section>
        <a
          className="grid"
          href="https://github.com/Lucas0019"
          title="Github User"
          target="_blanck"
        >
          Lucas0019
        </a>

        <form>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" />
        </form>
      </section>
    </>
  );
};

export default JSX;
