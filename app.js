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

const geocodeURL = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5rdXJzaW5nbGEiLCJhIjoiY2tlbHI2bWxwMDJ5eDJxcGNzMTNxeDQxeCJ9.yCeO0x1iWYB5jJoZhtZTzg&limit=1'
    request({url:url, json:true}, (error,response) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(response.body.features.length === 0) {
            callback('Unable to find the location! Try again', undefined)
        } else {
            const longitude = response.body.features[0].center[0]
            const latitude = response.body.features[0].center[1]
            callback(undefined, {
                longitude: longitude,
                latitude: latitude
            })
        }     
    })
}

geocodeURL('Montreal', (error, data) => {
    console.log('Error: ' + error)
    console.log('Data:', data)
})