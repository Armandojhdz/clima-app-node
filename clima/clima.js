const axios = require('axios');

const getClima = async(lat, lng) =>{
   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d9b8b7594fab1f816559a0f87a10568b&units=metric`);

   return resp.data.main.temp;
}



module.exports ={
    getClima
}