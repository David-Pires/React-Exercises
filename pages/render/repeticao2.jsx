import ListaProdutos from "../../data/listaProdutos.js";

export default function Repeticao2() {
  function renderizarLinhas() {

    console.log(ListaProdutos)   

    return ListaProdutos.map(produto => {
        return (
          <tr key={produto.id} >
            <td style={borda}>{produto.id }</td>
            <td style={borda}>{produto.nome}</td>
            <td style={borda}>{produto.preco}</td>
          </tr>
        )
      });
  }const borda = {
    border: 'solid 1px blue'
  }
  return (
    <div>
      <table >
        <thead>
          <tr >
            <th style={borda}>Código</th>
            <th style={borda}>Nome</th>
            <th style={borda}>Preço</th>
          </tr>
        </thead>
        <tbody>
          {renderizarLinhas()}
        </tbody>
      </table>
    </div>
  );
}
