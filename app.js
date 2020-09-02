const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Montreal', (error, data) => {
    if(error) {
        return console.log(error)
    }

    forecast(45.5088, -73.554, (error, forecastData) => {
        if(error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
      })
})