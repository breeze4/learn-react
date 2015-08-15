var ThumbnailList = React.createClass({
    render: function () {
        var list = this.props.thumbnailData.map(function(thumbData) {
            return (<Thumbnail {...thumbData} />)
        });
        return (
            <div>
                {list}
            </div>
        )
    }
});