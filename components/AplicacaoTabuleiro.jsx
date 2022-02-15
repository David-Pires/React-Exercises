import styles from "../pages/css/tabuleiro.module.css";
export default function AplicacaoTabuleiro() {
  function geraTabuleiro() { 
    for(let i = 0; i <= 64; i++) {
      return <h1 className={styles.preto}>1</h1>      
   };
 }
  return (
    <>
      {geraTabuleiro()}
      {geraTabuleiro()}

      {geraTabuleiro()}

     
    </>
  );
}
