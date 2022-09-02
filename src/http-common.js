import axios from 'axios';

  export default axios.create({
    
    baseURL: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL : process.env.REACT_APP_API_PRODUCTION,
    headers: {
        "Content-Type": "application/json"
        // 'ApiKey': process.env.REACT_APP_API_KEY
      },     
});