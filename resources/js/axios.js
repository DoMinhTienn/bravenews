import axios from 'axios'
import Cookies from 'js-cookie';

const axiosInstance  =  axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        Authorization: 'Bearer ' + Cookies.get("access_token"),
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
})
export default axiosInstance;