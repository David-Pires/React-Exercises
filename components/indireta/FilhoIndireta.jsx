export default function FilhoIndireta(props) {
  //"Passei em UTA"
  console.log(props.funcao)

  return (
    <div>
      <h1> Filho</h1>
      <button onClick={props.funcao}>Falar com o Pai</button>
    </div>
  )
}