const axios = require('axios')

class Busquedas {
    historial = [];
    
    constructor(){

    }

    async ciudad(lugar){
        const consulta = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params:{
                limit:5,
                language: 'es',
                'access_token': 'pk.eyJ1IjoibWF1c29sYW5vLXVwYWVwIiwiYSI6ImNsdjFhZng4NTA1MXYycXJzdHY1NmM0eXAifQ.FL_JifKjFAZhKzFvVl3S-Q'
            }
        });
        const resp = await consulta.get();
        return resp.data.features.map((ubicacion) => ({
            id: ubicacion.id,
            lugar: ubicacion.place_name_es,
            lat: ubicacion.center[1],
            lon: ubicacion.center[0]
        }));
        return [];
    }
}

module.exports =  Busquedas;