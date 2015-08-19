var Reflux = require('reflux');

module.exports = Reflux.createActions([
    'getTopics', // wires up a method of the same name on anything that implements this as listenables
    'getImages'
]);