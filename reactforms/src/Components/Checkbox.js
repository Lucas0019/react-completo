import { useState} from 'react'

/**
 * O estado do checkbox está relacionado ao checked, O checked é um estado que 
 * pode ser alterado pelo usuário. com isso o estado checked é um boolean.
 * 
 * Quando o checkbox é clicado, o estado é alterado. O estado é alterado para o 
 * valor oposto do estado atual
 * 
 * O onChange é um evento que é disparado quando o estado é alterado.
 */


export const Checkbox = () => {

  const [termos, setTermos] = useState(false);

  function handleChange({ target }) {
    setTermos(target.checked);

    console.log(target.checked);
  }

  return (
    <form>
      { termos && <p>Aceitou os termos</p>}
      <label>
        <input
          type="checkbox"
          value="termos"
          checked={termos}
          onChange={handleChange}
        />
        Li e aceitos os termos.
      </label>
    </form>
  );
};

