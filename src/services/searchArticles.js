import fetch from 'node-fetch';

const API_URL_BASE = 'http://newsapi.org/v2/everything?';
const API_SEARCH = `q=`;
const API_CONSTRAINTS = '&from=2021-09-13&sortBy=popularity';
const NEWS_TOKEN = `&apiKey=${process.env.NEWS_TOKEN}`;

const searchArticles = (query) => {
  return fetch(
    `${API_URL_BASE}${API_SEARCH}${query}${API_CONSTRAINTS}${NEWS_TOKEN}`
  ).then((res) => res.json());
};

export default searchArticles;
