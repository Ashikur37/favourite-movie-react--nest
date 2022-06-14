import endpoints from "../constants/endpoints";
import http from "../helpers/http";
export const getMovie = (search: string) => {
  return http.getAuth(`${endpoints.getMovie}?search=${search}`);
};
export const favourite = (movieId: number) => {
  return http.post(endpoints.favourite, { movieId });
};
