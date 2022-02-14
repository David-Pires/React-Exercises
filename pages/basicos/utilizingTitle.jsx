import Titulo from '../../components/Titulo'
export default function utilizingTitle() {
  return (    
      <div>
        <Titulo 
                principal="Página de Cadastro"
                secundario="Incluir, alterar e excluir coisas!"
                pequeno={true}
        />   
        <Titulo 
        principal="Página de Login"
        secundario="Informe seu e-mail e senha"
        pequeno={false}
/>            
      </div>    
  );
}
