export default function SomentePar(props) {
  const numeroPar = props.numero % 2 === 0;
  return ( 
    <div>{
      numeroPar ?
      <span>{props.numero}</span> 
      : null}
      </div>
  )
}

//______________________________
// if(props.numero % 2 === 0) {
//   return <h1>{props.numero}</h1>
// } else {
//   return null
// }

//__________________________
// repetição com ternario

// const numeroPar = props.numero % 2 === 0
//   return numeroPar ? <h1>{props.numero}</h1> : null


//________________________________
// const numeroPar = props.numero % 2 === 0;
//   return ( 
//     <div>{

//       numeroPar ?
//       <span>{props.numero}</span> 
//       : null}
//       </div>

//          )