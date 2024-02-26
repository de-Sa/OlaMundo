import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Lucas!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Antônio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou Lucas, desenvolvedor Front End e estou feliz de te
        ver por aqui.
      </p>
      <p className={styles.paragrafo}>
        Desde mais novo estive em contato constante com a tecnologia, desde
        hardware's até software's em geral, porém eu não tinha certeza de qual
        faculdade eu queria cursa, até que em meio a pandemia do Covid-19 em
        2020, eu acompanhei meu irmão em seu inicio de carreira como QA(Quality
        Assurance) e eu comecei a pegar interesse pela área, um pouco
        antes,nessa msm época eu tinha escolhido momentaneamente um curso de
        saúde, para não ficar parado, porém meu interesse por q.Por não ter
        muito conhecimento na área de desenvolvedor, após um tempo pesquisando
        sobre, escolhi cursar Análise e Desenvolvimento de Sistemas. Pois nisso
        eu percebi que, conseguiria ter a certeza de qual área eu gostaria de
        seguir carreira, ao decorrer do curso.
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou em 2022 em Belo Horizonte(BH) na
        UniBh, porém Logo no meu primeiro ano na faculdade, eu aprendi lógica de
        programação e o básico de várias linguagens, como Java, Python, C#, mas
        me despertou interesse em JavaScript no qual estou aprofundando e
        adquirindo mais conhecimento.
      </p>
    </PostModelo>
  );
}
