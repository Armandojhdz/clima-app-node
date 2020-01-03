const axios = require('axios');


const getLugarLatLng = async(dir) => {

    //codificamos el comando a carateres de un url para usarlo en la peticion
    const encodedUrl = encodeURI(dir);
   
    //creacion de instancia de la peticion
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key': 'e26f10ece1msh11b2835d7866912p19b4a4jsn6c51b36d14ef'}
    });

    //ejecutamos la instancia
    const resp = await instance.get();
            
    if (resp.data.Results.length === 0) {
        throw new Error(`NO hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

            return {
                direccion,
                lat,
                lng
            }
}

module.exports = {
    getLugarLatLng
}

