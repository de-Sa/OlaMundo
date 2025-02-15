import styles from "./Banner.module.css";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.apresentacao}>
          <h1 className={styles.titulo}>Olá, Mundo!</h1>

          <p className={styles.paragrafo}>
            Boas-vindas! Sou Lucas de Sá, Desenvolvedor Web e futuro full Stack.
            Possuo a combinação ideal de habilidade e determinação para
            transformar suas ideias em realidade. Vamos conversar?
          </p>
        </div>
        </div>

        <div className={styles.imagens}>
    
          <img
            className={styles.minhaFoto}
            src={minhaFoto}
            alt="Foto do Lucas"
          />
        
      </div>
    </div>
  );
}
