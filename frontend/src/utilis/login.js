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

export const login = (data) => {
  return axios({
    method: "post",
    url: "http://127.0.0.1:3000/login",
    // baseURL: "/api/login",
    //API要求的資料
    data: data,
  });
};
