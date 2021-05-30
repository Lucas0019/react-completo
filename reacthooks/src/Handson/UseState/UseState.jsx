import React, { useState } from "react";
import Produto from "./produto";

const UseSate = () => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const requestFecth = fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const response = await requestFecth;
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>
      <button onClick={handleClick}>Notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};

export default UseSate;
