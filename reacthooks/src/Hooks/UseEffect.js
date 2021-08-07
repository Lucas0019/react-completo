import React, {useState, useEffect} from 'react'

const UseEffect = () => {

  // Ciclo de Vida dos componentes
  // 01 - Montado | Requisições API e mostrando em tela
  // 02 - Atualiazado | quando o state/props muda
  // 03 - Desmontado | quando o componente é desmontado
  const [contar, setContar] = useState(0)

  useEffect(() => {
    console.log('Ocorre ao renderizar e ao atualizar 🍻');
    // No useEffect temos um array que passamos as dependencia
    // basicamente, estamos falando que todo item que estiver no array 
    // será executado quando o componente for montado
    // terá que execultar a função do useEffect denovo quando o mesmo mudar

    // Array vazio (Pura) [] => Execulta uma vez a função idependente se o estado mudar
  },[])

  function handleEffect() {
    return setContar(contar + 1);
  }

  useEffect(() => {
    document.title = 'Total ' + contar
  }, [contar])

  return (
    <div>
      <p>Ciclo de Vida - useEffect 🔥</p>
      <button onClick={handleEffect}>
        {contar}
      </button>
    </div>
  )
}

export default UseEffect
