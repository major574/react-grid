var React = require('react');

var BoxItem = React.createClass({
    render: function(){
        return (
            <li>
                <h3>{this.props.text}</h3>
            </li>
        );
    }
});

module.exports = BoxItem;
