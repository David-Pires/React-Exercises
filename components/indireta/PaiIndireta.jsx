import FilhoIndireta from './FilhoIndireta';

export default function PaiIndireta(props) {
  function falarComigo() {
    console.log('Alguém falou comigo')
  }
  return (
    <div>
      <FilhoIndireta funcao={falarComigo} />
          </div>
  )
}
