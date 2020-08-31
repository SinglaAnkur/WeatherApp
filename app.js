const request = require('request')
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

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Montreal.json?access_token=pk.eyJ1IjoiYW5rdXJzaW5nbGEiLCJhIjoiY2tlbHI2bWxwMDJ5eDJxcGNzMTNxeDQxeCJ9.yCeO0x1iWYB5jJoZhtZTzg&limit=1'

request({url:geocodeURL, json:true}, (error,response) => {
    if(error) {
        console.log('Unable to connect to location services')
    } else if(response.body.features.length === 0) {
        console.log('Unable to find the location! Try again')
    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
    
})