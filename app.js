const request = require('request')
const geocode = require('./utils/geocode')
const url = 'http://api.weatherstack.com/current?access_key=b45b89c9d9827638b34862bde443e05d&query=45.508888,-73.561668&units=f'

request({url : url, json:true}, (error,response) => {
    if(error) {
        console.log('Unable to connect to weather application')
    }
    else if(response.body.error) {
        console.log("Unable to find location")
    }
    else {
        console.log(response.body.current.weather_descriptions + '. It is currently ' + 
        response.body.current.temperature + ' degrees out. It feels like ' + 
        response.body.current.feelslike + ' degrees out.')
    }
})

geocode('Montreal', (error, data) => {
    console.log('Error: ' + error)
    console.log('Data:', data)
})