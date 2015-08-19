var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Main = React.createClass({
    render: function () {
        return <div>
            <Header />
            <RouteHandler/>
        </div>
    }
});

module.exports = Main;