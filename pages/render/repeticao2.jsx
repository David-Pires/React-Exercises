import ListaProdutos from "../../data/listaProdutos.js";

export default function Repeticao2() {
  function renderizarLinhas() {
    console.log(ListaProdutos)
    return <tr>eu</tr>
    // return listaProdutos.map(produto => {
    //     return (
    //       <tr key={produto.id}>
    //         <td>{produto.id}</td>
    //         <td>{produto.nome}</td>
    //         <td>{produto.preco}</td>

    //       </tr>
    //     )
    //   });
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {renderizarLinhas()}
        </tbody>
      </table>
    </div>
  );
}
