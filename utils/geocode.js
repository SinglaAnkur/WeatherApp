const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5rdXJzaW5nbGEiLCJhIjoiY2tlbHI2bWxwMDJ5eDJxcGNzMTNxeDQxeCJ9.yCeO0x1iWYB5jJoZhtZTzg&limit=1'
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

module.exports = geocode