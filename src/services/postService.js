import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

const getPosts = () => axiosInstance.get('');
const getPostComments = (id) => axiosInstance.get('/' + id + '/comments');

export {getPosts, getPostComments};