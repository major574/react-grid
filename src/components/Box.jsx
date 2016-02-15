var React = require('react');
var BoxItem = require('./BoxItem.jsx');

var Box = React.createClass({
    render: function(){
        var createItem = function(text, index){
            return <BoxItem key={index + text} text={text} />;
        }
        return (<ul>{this.props.items.map(createItem)}</ul>)
    }
});

module.exports = Box;
