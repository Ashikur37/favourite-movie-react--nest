import endpoints from "../constants/endpoints";
import http from "../helpers/http";
export const getMovie = (
  search: string,
  sortBy: string,
  favourite: string,
  page: number,
  pageLength: number
) => {
  return http.getAuth(
    `${endpoints.getMovie}?search=${search}&sortBy=${sortBy}&favourite=${favourite}&page=${page}&limit=${pageLength}`
  );
};
export const favourite = (movieId: number) => {
  return http.postAuth(endpoints.favourite, { movieId });
};
