import { useState } from "react";

export const MultiplosCheckbox = () => {
  
  const [cores, setCores] = useState([]);

  function handleChangeColors({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked("azul")}
          onChange={handleChangeColors}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked("vermelho")}
          onChange={handleChangeColors}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecked("verde")}
          onChange={handleChangeColors}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleChecked("amarelo")}
          onChange={handleChangeColors}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleChecked("roxo")}
          onChange={handleChangeColors}
        />
        Roxo
      </label>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};
