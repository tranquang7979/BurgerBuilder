import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-62df3.firebaseio.com/'
});

export default instance;