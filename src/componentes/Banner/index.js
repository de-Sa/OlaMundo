import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>

        <p className={styles.paragrafo}>
        Boas-vindas! Sou Lucas de Sá, Analista e Desenvolvedor de Software. Possuo a combinação ideal de habilidade e determinação para transformar suas ideias em realidade. Vamos conversar?
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="Complemento, Fundo da Foto"
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Lucas"
        />
      </div>
    </div>
  );
}
