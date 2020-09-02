const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(45.5088, -73.554, (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
  })

geocode('Montreal', (error, data) => {
    console.log('Error: ' + error)
    console.log('Data:', data)
})