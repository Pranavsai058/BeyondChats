import { getArticles, updateArticle } from "./api.js";
import { scrapeContent } from "./scraper.js";
import { rewriteArticle } from "./llm.js";

const run = async () => {
  const { data } = await getArticles();

  for (const article of data) {
    if (article.status === "updated") continue;

    const ref1 = { url: "https://example.com/1", content: "ref1" };
    const ref2 = { url: "https://example.com/2", content: "ref2" };

    const updated = rewriteArticle(
      article.original_content,
      ref1,
      ref2
    );

    await updateArticle(article.id, {
      updated_content: updated,
      references: [ref1.url, ref2.url],
      status: "updated"
    });
  }
};

run();
