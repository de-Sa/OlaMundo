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
        alt="Foto do Lucas com a Gatinha"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou Lucas, desenvolvedor Front-end, uma pessoa brincalhona que adorava encher o saco da minha gatinha que era completamente oposta à minha energia caótica (como pode ver pela cara dela nessa foto hahah), mas incrivelmente nos dávamos muito bem. Estou muito feliz de te ver por aqui explorando meu portfólio.
      </p>
      <p className={styles.paragrafo}>
      Desde muito novo estive em contato constante com a tecnologia, desde hardware até software em geral. Porém, eu não tinha certeza de qual faculdade eu queria cursar, até que em meio à pandemia da Covid-19 em 2020, eu acompanhei meu irmão no início de sua carreira como QA (Quality Assurance) e comecei a pegar interesse pela área. Um pouco antes, nessa mesma época, eu tinha escolhido momentaneamente um curso de saúde para não ficar parado. Porém, meu interesse por QA, por não ter muito conhecimento na área de desenvolvimento, após um tempo pesquisando, escolhi cursar Análise e Desenvolvimento de Sistemas. Pois nisso eu percebi que conseguiria ter a certeza de qual área eu gostaria de seguir carreira, ao decorrer do curso.
      </p>
      <p className={styles.paragrafo}>
      Minha história com programação começou em 2022 em Belo Horizonte (BH), na UniBH. Logo no meu primeiro ano na faculdade, aprendi lógica de programação e o básico de várias linguagens, como Java, Python e C#, mas despertou-me interesse em JavaScript, no qual estou me aprofundando e adquirindo mais conhecimento.
      </p>


    </PostModelo>
  );
}
