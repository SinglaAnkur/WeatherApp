const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=b45b89c9d9827638b34862bde443e05d&query=45.508888,-73.561668&units=f'

request({url : url, json:true}, (error,response) => {
    console.log(response.body.current.weather_descriptions + '. It is currently ' + 
    response.body.current.temperature + ' degrees out. It feels like ' + 
    response.body.current.feelslike + ' degrees out.')
})