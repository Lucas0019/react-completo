import React from 'react'

/**
 * No React o textarea é utilizado como um input, 
 * uma tag única sem abertura/fechamento e 
 * com o value para definir o seu valor interno.
 */

const TextArea = () => {

  const [mensagem, setMensagem] = React.useState('');

  return (
    <form>
      <textarea
        id="mensagem"
        value={mensagem}
        rows="5"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <p>{mensagem}</p>
    </form>
  )
}

export default TextArea
