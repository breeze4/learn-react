var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Main = require('./components/main');
var Topic = require('./components/topic');
var TopicList = require('./components/topic-list');

var routes = (
    <Route name="main" path="/" handler={Main}>
        <Route name="topic" path="topics/:id" handler={Topic}/>
        <DefaultRoute handler={TopicList}/>
    </Route>
);

module.exports = routes;