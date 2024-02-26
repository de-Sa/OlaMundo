import styles from "./PostRecomendacoes.module.css";

import PostCard from "componentes/PostCard";
import posts from "json/posts.json";
import { useParams } from "react-router-dom";

export default function PostRecomendacoes() {
  const parametros = useParams();

  const listaRecomendacoes = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <div>
      <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
      <ul className={styles.postsRecomendados}>
        {listaRecomendacoes.map((postRecomendacoes) => (
          <li key={postRecomendacoes.id}>
            <PostCard post={postRecomendacoes} />
          </li>
        ))}
      </ul>
    </div>
  );
}
