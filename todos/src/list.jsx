var React = require('react');

// need to implement base case of when user has no todos
var List = React.createClass({
    render: function () {
        return <ul>
            {this.renderList()}
        </ul>
    },
    renderList: function () {
        if (this.props.items && Object.keys(this.props.items).length === 0) {
            return <h4>Add a todo to get started.</h4>
        } else {
            var children = [];

            for (var key in this.props.items) {
                var item = this.props.items[key];
                children.push(
                    <li>{item.text}</li>
                )
            }
            return children;
        }
    }
});

module.exports = List;