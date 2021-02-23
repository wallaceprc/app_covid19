import axios from 'axios';

const apiCovid = axios.create({
  baseUrl: 'https://api.covid19api.com/dayone/country/brazil'
})

export default apiCovid;