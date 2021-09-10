const NEWS_TOKEN = process.env.NEWS_TOKEN;
const NEWS_API = `http://newsapi.org/v2/top-headlines?
country=us&apiKey=${NEWS_TOKEN}`;

const getArticles = () => {
  return fetch(NEWS_API).then((res) => res.json);
};

export default getArticles;
