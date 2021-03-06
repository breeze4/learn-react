var React = require('react'); // npm style include
var ThumbnailList = require('./thumbnail-list'); // local module style include

var options = {
    thumbnailData: [{
        title: 'See Courses ',
        number: 12,
        header: 'Learn React',
        description: 'French press, whipped grinder, mug beans filter caf� au lait chicory cappuccino. ' +
        'Extra cappuccino macchiato latte steamed medium filter java brewed that cortado.',
        imageUrl: 'http://formatjs.io/img/react.svg'
    }, {
        title: 'See Courses ',
        number: 25,
        header: 'Learn Gulp',
        description: 'Trifecta fair trade at organic dark whipped java, acerbic dripper frappuccino latte cream. ' +
        'Et steamed at steamed carajillo froth breve coffee crema grinder doppio.',
        imageUrl: 'http://brunch.io/images/others/gulp.png'
    }]
}

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));