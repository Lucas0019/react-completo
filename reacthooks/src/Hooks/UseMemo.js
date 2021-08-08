import React, {useState, useMemo} from 'react'

// useMemo() Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um 
// componente for atualizado. Recebe um callback e uma array de dependências.

// Serve para casos em que você faz uma operação lenta para retornar um valor.

const UseMemo = () => {

  const [contar, setContar] = useState(0)

  const valor = useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto')
    // Só será executado uma vez

    console.log('Aconteceu o uso do useMemo');
    return localStorageItem;
  }, [])

  console.log(valor);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

export default UseMemo
