export default function Estilo(props) {
  //<h1 className={props.numero >= 0 ? "azul" : "vermelho"}>Texto #02</h1>
  //essa seria a aplicação direta na tag
  const classAplicada = props.numero >= 0 ? "azul" : "vermelho"
  return (
    <div>
      <h1 style={{backgroundColor: props.numero >= 0 ? "#2d2" : "#d22",
                  color: props.color,
                  textAlign: props.direita ? "right" : "left",
    }}>
      Texto Qualquer
      </h1>
      <h1 className={classAplicada}>Texto #02</h1>
      </div>
  )
}