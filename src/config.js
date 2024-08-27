const URL_API = "http://localhost:3002/";

const endpoints = {
  users: `${URL_API}users`,
  userByEmailAndPass: (email, password) =>
    `${URL_API}user?email=${email}&password=${password}`,
  news: `${URL_API}news`,
  categories: `${URL_API}categories`,
  comments: (newsId) => `${URL_API}comments?newsId=${newsId}`,
};

export default endpoints;
