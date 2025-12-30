import axios from "axios";
import cheerio from "cheerio";

export const scrapeContent = async (url) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  return $("article").text().trim();
};
