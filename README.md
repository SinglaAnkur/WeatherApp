# WeatherApp

Weather app allows you to pull in real-time weather data into your app. 
The application has been built in Node JS. It uses asynchronous programming to make third-party HTTP APIs requests.

### Installing
Install Node.js and Visual Studio Code. Both are free, open source, and available for all operating system.
Below are links to both tools.
Links:
* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

Below is an example script stored in a file named index.js.
```
console.log('Hello Node.js!')
```
Running a Script:
```
$ node index.js
Hello Node.js!
```
### Making HTTP Requests
There are several libraries that make it easy to fire off HTTP requests. You can install it using the command below.
```
$ npm i request@2.88.0
```

Before you use the library in your app, you’ll need to figure out which URL you’re trying to fetch. To fetch real-time weather data, you’ll need to sign up for a free Weatherstack API account. You can do that [here](https://weatherstack.com). 

This API could be used to convert city name to its coordinates(longitude and latitude). These coordinates could be used to provide weather data using Mapbox API. You’ll need to sign up for a free Mapbox API account. You can do that [here](https://www.mapbox.com/).

### Running the code
```
$ node app.js "Montreal"
Montréal, Quebec, Canada
Partly cloudy. It is currently 19 degrees out. It feels like 19 degrees out.
```

## Acknowledgments
I would like to gratefully and sincerely thank Prof. Andrew Mead for his guidance, understanding through course The Complete Node.js Developer Course (3rd Edition) on Udemy.com
