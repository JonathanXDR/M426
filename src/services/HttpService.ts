import axios from "axios";

const instance = axios.create({
  baseURL: "https://memory-api.dev-scapp.swisscom.com",
});

// catch all errors and log them
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default instance;
