import axios from  'axios';

const instance = axios.create({
  baseURL: 'https://dd-burger-builder.firebaseio.com/'
});

export default instance;
