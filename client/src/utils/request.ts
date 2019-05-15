import axios from 'axios';

let RequestApi = axios.create();

RequestApi.defaults.baseURL = process.env.server || 'http://localhost:3000/api/';

export default RequestApi;
