const bearerToken = {
  set(token: string) {
    localStorage.setItem("token", token);
  },
  get() {
    return localStorage.getItem("token");
  },
  clear() {
    localStorage.removeItem("token");
  },
};

export default bearerToken;
