import axios from "axios";

export const signup = (data) =>
  axios({
    method: "POST",
    url: "http://127.0.0.1:3000/signup",
    data: data,
  });
