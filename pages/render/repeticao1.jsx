export default function Repeticao1() {
  const meuObjeto = ["1", "2"];

  function as() {
    return meuObjeto.map((nome, i ) => <li key={i}>{nome}</li>)
  }
  return (
    <ul>
      {as()}
      <br></br>
      retorno de algo
    </ul>
  );
}

// Retorno com Key e arrowfunction
// function fazerRepeticaoArray() {

//   return meuObjetoComNomes.map((nome, i) => <li key={i}>{nome}</li>)
// }

{
  /*  
  
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
        vazio.push(<li key={i}>{meuObjetoComNomes[i]}</li>)        
      }
      return vazio;
    }

    return(
      <ul>
      {fazerRepeticaoArray()}
      </ul>     
  )

  }

  
  */
}
