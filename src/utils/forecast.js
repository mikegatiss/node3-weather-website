const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8abb59a1e17641d52eda0664fdaab1a5/' + latitude + ',' + longitude
    console.log(url)
    request({ url, json: true, strictSSL:false }, (error, { body } = {}) => {
        if (error) {
            console.log(error)
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            console.log(body.error)
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out with a high today of ' + body.daily.data[0].temperatureHigh + ' and a low tonight of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast