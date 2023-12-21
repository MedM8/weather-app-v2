import axios from 'axios';

export const fetchCurrentData = (API_PLACE) => {
    return axios.get('https://api.openweathermap.org/data/2.5/weather?&units=metric&q='+ API_PLACE +'&appid=e3b072e886bcdbe0745930e87bd0bee3')
    .then(res => {
      return res.data
    })
    .catch(err =>{
      console.error(err);
    })
  }

