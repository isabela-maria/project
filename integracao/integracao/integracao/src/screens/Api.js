import axios from "axios";

const instance = axios.create({
    baseURL: 'https://smart-water-box.herokuapp.com/api'
})

export default instance;