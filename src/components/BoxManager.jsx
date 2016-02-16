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
        var divStyle= {
            marginTop: 10
        };
        var headingStyle = {

        }

        if(this.props.headingColor){
            headingStyle.background = this.props.headingColor;
        }

        return (
            <div style={divStyle} className="col-xs-4 col-sm-6 col-md-4 col-lg-6">
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText}/>
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                    <Box items={this.state.items} />
                </div>
            </div>
        );
    }
})

module.exports = BoxManager;
