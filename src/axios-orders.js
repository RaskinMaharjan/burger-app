import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-house-eca2b-default-rtdb.firebaseio.com/'

})

export default instance;