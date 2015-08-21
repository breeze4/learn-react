var Fetch = require('whatwg-fetch');

var rootUrl = 'https://api.imgur.com/3/';
var apiKey = ''; // eek private key on github!

var Api = {
    get: function (url) {
        return fetch(rootUrl + url, {
            headers: {
                'Authorization': 'Client-ID ' + apiKey
            }
        }).then(function (response) {
            return response.json();
        });
    }
};

module.exports = window.api = Api;