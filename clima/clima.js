const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=da74ec9278c2d798b4dbff342b9da822`);

    //    let main = resp.data.main;

    // if (resp.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay resultados para: lat ${ lat }, lgn ${lng}`);
    // }

    return resp.data.main.temp;

}

module.exports = {
    getClima
}