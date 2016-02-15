var React = require('react');
var BoxItem = require('./BoxItem.jsx');

var Box = React.createClass({
    render: function(){
        var createItem = function(){
            return <BoxItem/>;
        }
        return (<div>{(createItem)}</div>)
    }
});

module.exports = Box;
