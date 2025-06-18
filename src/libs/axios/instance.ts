import environment from "@/config/environment"
import axios from "axios";

const headers = {
    "Content-Type": "application/json",
}

const instance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 10000, // 10 seconds timeout
});

instance.interceptors.request.use(
    async (request) => {
        // You can add any request modifications here if needed
        return request;
    },
    (error) => Promise.reject(error)
)

instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default instance;