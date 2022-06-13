import axios from "axios";
import token from "./token";
const http: any = {
  get(url: string) {
    axios.get(url);
  },
  getAuth(url: string) {
    axios.get(url, {
      headers: {
        Authorization: "Bearer " + token.get(),
      },
    });
  },
  post(url: string, data: any) {
    return axios.post(url, data);
  },
  postAuth(url: string, data: any) {
    axios.post(url, data, {
      headers: {
        Authorization: "Bearer " + token.get(),
      },
    });
  },
  patchAuth(url: string, data: any) {
    axios.patch(url, data, {
      headers: {
        Authorization: "Bearer " + token.get(),
      },
    });
  },
  deleteAuth(url: string) {
    axios.delete(url, {
      headers: {
        Authorization: "Bearer " + token.get(),
      },
    });
  },
};

export default http;
