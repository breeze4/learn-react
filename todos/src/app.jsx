var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');

var rootUrl = 'https://scorching-inferno-5880.firebaseio.com/';

var App = React.createClass({
    mixins: [ReactFire],
    componentWillMount: function () {
        // reactfire, sets 'items' as a state attribute that gets the firebase instance bound to it
        this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
        this.firebaseRefs.items.set
    },
    render: function () {
        return <div className="row panel panel-default">
            <div className="col-md-8 col-md-offset-2">
                <h2 className="text-center">
                    To-Do List
                </h2>
                <Header itemsStore={this.firebaseRefs.items} />
            </div>
        </div>
    }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));