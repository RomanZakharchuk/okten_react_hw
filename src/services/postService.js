import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

const getPosts = () => axiosInstance.get('').then(respons => respons);
const getPostComments = (id) => axiosInstance.get('/' + id + '/comments').then(respons => respons);

export {getPosts, getPostComments};