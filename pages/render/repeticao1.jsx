export default function Repeticao1() {
    const myObject = [
      'object 1',
      'object 2',
      'object 3',
    ]

    function myArray() {
      return myObject.map((objects, i) => <li key={i}>{objects}</li>)
    }
    return(
      <ul>
        {myArray()}<br/>Something here
      </ul>
    )
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
