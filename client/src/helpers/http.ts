import axios from "axios";
import bearerToken from "./bearerToken";

const httpHelper: any = {
  get(url: string) {
    return axios.get(url);
  },
  getAuth(url: string) {
    return axios.get(url, {
      headers: {
        Authorization: "Bearer " + bearerToken.get(),
      },
    });
  },
  post(url: string, data: any) {
    return axios.post(url, data);
  },
  postAuth(url: string, data: any) {
    return axios.post(url, data, {
      headers: {
        Authorization: "Bearer " + bearerToken.get(),
      },
    });
  },
  patchAuth(url: string, data: any) {
    return axios.patch(url, data, {
      headers: {
        Authorization: "Bearer " + bearerToken.get(),
      },
    });
  },
  deleteAuth(url: string) {
    return axios.delete(url, {
      headers: {
        Authorization: "Bearer " + bearerToken.get(),
      },
    });
  },
};

export default httpHelper;
