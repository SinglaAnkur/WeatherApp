const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b45b89c9d9827638b34862bde443e05d&query=' + latitude + ',' + longitude + '&units=f'
   
    request({url:url, json:true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather application', undefined)
        } else if(response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions + 
                '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' 
                + response.body.current.feelslike + ' degrees out.')
        }
    })

}

module.exports = forecast