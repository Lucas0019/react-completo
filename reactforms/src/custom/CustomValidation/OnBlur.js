import React, { useState } from "react";
import { Input } from "../CustomInput/Input";

export const OnBlur = () => {
  const [cep, setCep] = useState("");
  const [error, setError] = useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  return (
    <form>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Digite seu CEP"
      />
      {error && <p style={{ color: "tomato" }}>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};
