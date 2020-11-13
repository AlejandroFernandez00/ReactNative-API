const request = require('request');

var url = 'http://numbersapi.com/random/year?json';

function fraseAño(callback){

    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            return callback(JSON.parse(body));
        }  
});
}

module.exports = fraseAño;