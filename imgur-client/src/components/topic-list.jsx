var React = require('react');
var TopicStore = require('../stores/topic-store');

var TopicList = React.createClass({
    getInitialState: function () {
        return {
            topics: []
        }
    },
    componentWillMount: function () {
        TopicStore.getTopics() // returns a promise
            .then(function () {
                this.setState({
                    topics: TopicStore.topics
                });
            }.bind(this));
    },
    render: function () {
        return <div className="list-group">
            Topic List
            {this.renderTopics()}
        </div>
    },
    renderTopics: function () {
        return this.state.topics.map(function (topic) {
            return <li>{topic}</li>
        })
    }
});

module.exports = TopicList;