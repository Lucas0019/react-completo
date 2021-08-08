import React, { useState, useRef } from "react";

// O seu uso não é restrito a elementos do dom. Podemos utilizar também para guardarmos a
// referência de qualquer valor, como de um setTimeout por exemplo.

// Notificação carrinho de compras - ecommerce

const ReferenciaValues = () => {
  const [contar, setContar] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setNotificacao("Obrigado por comprar");
    
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
    setContar(contar + 1);
  }

  return(
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>
        {contar} produtos adicionado ao carrinho
      </button>
    </div>
  );
};

export default ReferenciaValues;
