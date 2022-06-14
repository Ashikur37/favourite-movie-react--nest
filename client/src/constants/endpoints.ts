const baseUrl = process.env.REACT_APP_SERVER_URL;
const endpoints = {
  signin: baseUrl + "/auth/signin",
  signup: baseUrl + "/auth/signup",
  getUser: baseUrl + "/users/me",
  getMovie: baseUrl + "/movies",
  favourite: baseUrl + "/movies/favourite",
};

export default endpoints;
