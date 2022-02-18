export default function Repeticao1() {
    const meuObjetoComNomes = [
      'Ab',
      'Baby',
      'Cobby',
      'Trustyworth',
    ]
    
    function fazerRepeticaoArray() {
      const vazio = [];
      for (let i = 0; i < meuObjetoComNomes.length; i++) {
        vazio.push(<li>{meuObjetoComNomes[i]}</li>)        
      }
      return vazio;
    }

    return(
      <ul>
      {fazerRepeticaoArray()}
      </ul>     
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