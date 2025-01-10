import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    function (config) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
