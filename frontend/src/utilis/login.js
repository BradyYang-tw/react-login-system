import axios from "axios";

// const userRequest = axios.create({
//   baseURL: "127.0.0.1:3000",
//   headers: { "Content-Type": "application/json" },
// });

// export const login = (username, password) => {
//   return axios
//     .post(
//       "127.0.0.1:3000/login",
//       JSON.stringify({
//         username,
//         password,
//       })
//     )
//     .then((res) => res.data)
//     .catch((err) => err.toString());
// };

export const login = (username, password) => {
  return axios({
    method: "post",
    baseURL: "/login",
    //API要求的資料
    data: {
      username: username,
      password: password,
    },
    proxy: {
      protocol: "http",
      host: "127.0.0.1",
      // hostname: '127.0.0.1' // Takes precedence over 'host' if both are defined
      port: 3000,
    },
  }).then((response) => console.log(response));
};
