var React = require('react');
var Box = require('./Box.jsx');

var BoxManager = React.createClass({
    getInitialState: function(){
        return {items: [], newItemText: ''};
    },
    onChange: function(e){
        this.setState({newItemText: e.target.value});
    },
    handleSubmit: function(e){
        e.preventDefault();
        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText:''});
    },
    render: function(){
        return (
            <div>
                <div>
                    <h3>{this.props.title}</h3>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.onChange} value={this.state.newItemText}/>
                        <button>Add</button>
                    </form>
                </div>
                <Box items={this.state.items} />
            </div>
        );
    }
})

module.exports = BoxManager;
