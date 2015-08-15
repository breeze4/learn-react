var React = require('react'); // npm style include
var Dropdown = require('./dropdown'); // local module style include

var options = {
    title: 'Choose a dessert',
    items: [
        'Apple Pie',
        'Peach Cobbler',
        'Coconut Cream Pie'
    ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));