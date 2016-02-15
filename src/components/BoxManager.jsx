var React = require('react');
var Box = require('./Box.jsx');

var BoxManager = React.createClass({
    render: function(){
        return (
            <div>
                <List/>
            </div>
        );
    }
})

module.exports = BoxManager;
