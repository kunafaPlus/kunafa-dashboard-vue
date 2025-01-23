import Vue from 'vue'
import axios from 'axios'
// import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'

const axiosIns = axios.create({
    // You can add your headers here
    // ================================
    baseURL: process.env.MIX_VUE_APP_API_URL,
    //https://laravel.com/docs/8.x/mix#environment-variables  // how to access .env varibles in laravel form vue
    //baseURL: 'http://logistics.test/api/v1',
    timeout: 10000,
})

// Request intercepter
axiosIns.interceptors.request.use(
    config => {
        const token = isUserLoggedIn();
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + isUserLoggedIn(); // Set JWT token for Request
        }
        return config;
    },
    error => {
        console.log(error); // for debug
        Promise.reject(error);
    }
);

// response pre-processing
axiosIns.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

Vue.prototype.$http = axiosIns

// https://vuejs.org/v2/cookbook/adding-instance-properties.html

export default axiosIns

