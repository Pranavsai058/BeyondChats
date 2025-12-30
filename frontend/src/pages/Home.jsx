import { useEffect, useState } from "react";
import { api } from "../api";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.get("/articles").then(res => setArticles(res.data));
  }, []);

  return (
    <div>
      <h1>BeyondChats Articles</h1>

      {articles.map(article => (
        <div key={article.id}>
          <a href={`/article/${article.id}`}>
            {article.title}
          </a>
          <p>Status: {article.status}</p>
        </div>
      ))}
    </div>
  );
}
