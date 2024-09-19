require('dotenv').config();
const axios = require("axios");
const MYTOKEN = process.env.MYTOKEN;

const BASE_URL = `https://api.telegram.org/bot${MYTOKEN}`;
function getAxiosInstance() {
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params,
            });
        },
        post(method, data){
            return axios({
                method: "post",
                baseURL: BASE_URL,
                url: `/${method}`,
                data,
            });
        },
    }
}

module.exports = { axiosInstance: getAxiosInstance()};