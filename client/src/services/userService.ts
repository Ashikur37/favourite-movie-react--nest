import endpoints from "../constants/endpoints";
import http from "../helpers/http";
import { signinData, signupData } from "../types";

export const signin = (data: signinData) => {
  return http.post(endpoints.signin, data);
};
export const signup = (data: signupData) => {
  return http.post(endpoints.signup, data);
};
export const geCurrenttUser = () => {
  return http.getAuth(endpoints.getUser);
};
