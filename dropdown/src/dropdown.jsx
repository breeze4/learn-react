var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

// show a button and a list
// this component should know when to show the list
// based on when the user clicked a button
var Dropdown = React.createClass({
    getInitialState: function () {
        return {
            open: false
        }
    },
    handleClick: function () {
        this.setState({
            open: !this.state.open
        })
    },
    handleItemClick: function(item) {
        this.setState({
            open: false,
            itemTitle: item
        })
    },
    render: function () {
        var list = this.props.items.map(function (item) {
            return <ListItem
                whenItemClicked={this.handleItemClick}
                item={item}
                className={this.state.itemTitle === item ? "active" : ""}/>
        }.bind(this))

        return <div className="dropdown">
            <Button
                whenClicked={this.handleClick}
                className="btn-default"
                title={this.state.itemTitle || this.props.title}
                subTitleClassName="caret"/>
            <ul className={"dropdown-menu " +  (this.state.open ? "show" : "")}>
                {list}
            </ul>
        </div>
    }
});

module.exports = Dropdown;