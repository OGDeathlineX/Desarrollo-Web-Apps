const axios = require('axios')

class Busquedas {
    historial = [];
    
    constructor(){

    }

    async ciudad(lugar){
        const consulta = await axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params:{
                limit:5,
                language: 'es',
                access_token: 'pk.eyJ1IjoibWF1c29sYW5vLXVwYWVwIiwiYSI6ImNsdjFhZng4NTA1MXYycXJzdHY1NmM0eXAifQ.FL_JifKjFAZhKzFvVl3S-Q'
            }
        });
        const resp = consulta.get();
        console.log(resp);
        return [];
    }
}
module.exports =  Busquedas;