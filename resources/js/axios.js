import axios from 'axios'
import Cookies from 'js-cookie';

const axiosInstance  =  axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
})
axiosInstance.interceptors.request.use(
    (config) => {
        const access_token = Cookies.get("access_token")
        if (access_token) {
            config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
    },
    (error) => {
      return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default axiosInstance;