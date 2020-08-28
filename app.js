const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=b45b89c9d9827638b34862bde443e05d&query=45.508888,-73.561668'

request({url : url}, (error,response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})