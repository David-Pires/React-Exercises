import styles from '../css/tabuleiro.module.css'

export default function tabuleiro(props) {
  return (
    <>
    <div id={styles.mainDiv}>
          <span className={styles.branco,
                            styles.preto,
                            styles.branco
          }></span>
          


    </div>
    
    </>
  )
}