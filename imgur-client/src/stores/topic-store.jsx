var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions], // Actions 'getTopics' maps to getTopics function
    getTopics: function () {
        return Api.get('topics/defaults').then(function (json) {
            this.topics = json.data;
            this.triggerChange();
        }.bind(this));
    },
    triggerChange: function () {
        this.trigger('change', this.topics);
    }
});