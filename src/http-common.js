import axios from 'axios';

  export default axios.create({
    
    baseURL: 'https://localhost:7024',
    headers: {
        "Content-Type": "application/json"
        // 'ApiKey': process.env.REACT_APP_API_KEY
      },     
});