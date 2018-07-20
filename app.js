const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/// COORDENADAS
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Descripcion de la ciudad para obtener el clima',
            demand: true
        }
    }).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temp }`;
        //return temper.temp;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e))

// clima.getClima(18.9834234, -69.0448657)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e))

// let encodedUrl = encodeURI(argv.direccion);

// axios
//     .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)
//     .then(resp => {
//         //console.log(JSON.stringify(resp.data, undefined, 2));

//         let location = resp.data.results[0];

//         let direccion = location.formatted_address;
//         let coors = location.geometry.location;

//         console.log(`Dirección: ${direccion}`);
//         console.log(`Latitud: ${coors.lat}`);
//         console.log(`Longitud: ${coors.lng}`);
//     })
//     .catch(e => console.log('Error!!!!', e.message));

/// CLIMA
// axios
//     .get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=da74ec9278c2d798b4dbff342b9da822`)
//     .then(resp => {
//         console.log(resp.data.main.temp);
//     })

//    let location = resp.data.main0];

// const argv = require('yargs')
//     .options({
//         lat: {
//             alias: 'lt',
//             desc: 'Parámetro de Latitud',
//             demand: true
//         }
//     }, {
//         lng: {
//             alias: 'ln',
//             desc: 'Parámetro de Longitud',
//             demand: true
//         }
//     }).argv;