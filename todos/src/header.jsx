var React = require('react');

var Header = React.createClass({
    getInitialState: function () {
        return {
            text: ""
        }
    },
    handleClick: function () {
        console.log("adding todo: ", this.state.text);
        if (!this.state.text) return;
        this.props.itemsStore.push({
            text: this.state.text,
            done: false
        });
        this.setState({text: ''});
    },
    handleInputChange: function (event) {
        this.setState({
            text: event.target.value
        })
    },
    render: function () {
        return <div className="input-group">
            <input type="text" className="form-control"
                   onChange={this.handleInputChange}
                   value={this.state.text}/>
            <span className="input-group-btn">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.handleClick}>
                    Add
                </button>
            </span>
        </div>
    }
});

module.exports = Header;