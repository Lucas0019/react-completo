import React from 'react'

const Events = () => {

  // Podemos atribuir eventos diretamente aos elementos JSX como um atributo. 
  // Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo 
  // as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).

  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  

  return (
    <>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>

      {/* 
        É possível executar uma função anônima no evento. 
        Guardar o estado do DOM não é o mais indicado.
      */}
      <button onClick={({ target }) => target.classList.toggle('ativa')}>
        Ativar
      </button>

      <input onFocus={(e) => { console.log('Foquei no input');}}
      placeholder="onFocus 🔥."
      />
    </>
  );
}

export default Events
