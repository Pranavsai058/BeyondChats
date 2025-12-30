import axios from "axios";

const API = "http://localhost:8000/api";

export const getArticles = () =>
  axios.get(`${API}/articles`);

export const updateArticle = (id, data) =>
  axios.put(`${API}/articles/${id}`, data);
