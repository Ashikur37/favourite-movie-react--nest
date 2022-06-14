import endpoints from "../constants/endpoints";
import http from "../helpers/http";
export const getMovie = () => {
  return http.getAuth(endpoints.getMovie);
};
export const favourite = (movieId: number) => {
  return http.post(endpoints.favourite, { movieId });
};
