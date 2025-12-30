import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    api.get(`/articles/${id}`).then(res => setArticle(res.data));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div>
      <h2>{article.title}</h2>

      <h3>Original Article</h3>
      <p>{article.original_content}</p>

      {article.updated_content && (
        <>
          <h3>Updated Article</h3>
          <p>{article.updated_content}</p>

          <h4>References</h4>
          <ul>
            {article.references?.map(ref => (
              <li key={ref}>
                <a href={ref} target="_blank">{ref}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
