import React, { useState, useRef } from "react";

const RealCaseUseRef = () => {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState("");
  const inputElement = useRef();

  function handleClick() {
    setComentarios((comentarios) => [...comentarios, input]);
    setInput("");

    // foucus() É comum utilizarmos em formulários, quando precisamos de uma
    // referência do elemento para colocarmos o mesmo em foco.
    inputElement.current.focus();
  }

  return (
    <div>
      <section style={{display: 'flex', gap: '.2rem'}}>
        <input
          type="text"
          value={input}
          ref={inputElement}
          onChange={({ target }) => setInput(target.value)}
        />
        <br />
        <button onClick={handleClick}>Enviar</button>
      </section>

      <section>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RealCaseUseRef;
