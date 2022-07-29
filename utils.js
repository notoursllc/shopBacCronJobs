if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const axios = require('axios');

function getAxios() {
    return axios.create({
        baseURL: process.env.API_URL,
        headers: {
            'Content-Type': 'application/json'
        },
        auth: {
            username: process.env.CRON_USERNAME,
            password: process.env.CRON_PASSWORD
        }
    });
}

exports.getAxios = getAxios;