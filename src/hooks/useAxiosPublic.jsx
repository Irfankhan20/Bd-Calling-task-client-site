import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bd-calling-job-task-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
