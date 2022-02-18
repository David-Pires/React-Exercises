export default function Repeticao1() {

  const meuArrayDeNomes = [
    'Allan',
    'Gabriel',
    'Italo',
    'Airanildo',
    'David',
    'Vinicius',
  ]

  function percorreArray() {
    const arrayVazio = [];

    for (let i = 0; i < meuArrayDeNomes.length; i++) {
      arrayVazio.push(<li>{meuArrayDeNomes[i]}</li>)
           
    }
    return arrayVazio;
  }
  return(
    <>
      <ul>{percorreArray()}</ul>
    </>
  )

  }







  {/*  
  
  export default function Repeticao1() {
  const listaAprovados = [
    'João',
    'Maria',
    'Pedro',
    'Lucio',
    'Cheguevara',
    'Marcos',
    'Cristovão',
    'Barnabé'
  ]

  function renderizarLista() {
    const itens = [];

    for (let i = 0; i < listaAprovados.length; i++) {
      itens.push(<li>{listaAprovados[i]}</li>);      
    }    
        return itens
  } 
  
  return (
    <ul>
    {renderizarLista()}
    </ul>
  )
  
  */}