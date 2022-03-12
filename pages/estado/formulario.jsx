import { useState } from 'react'

export default function formulario() {
  const [valor, setValor] = useState(undefined)
  function alterarInput() {
    setValor(valor + "-")
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <span>{valor}</span>
      <input type="" value={valor} onChange={e => setValor(e.target.value)}/>
      <button onClick={alterarInput} type="">Alterar</button>

    </div>
  )
}