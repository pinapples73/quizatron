import React, { Component } from 'react';

class AddPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playerName: ""
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(event){
        this.setState({playerName: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        const name = this.state.playerName.trim();
        if(name.length > 0) {
            this.props.onAddPlayer(name);
            this.setState({playerName: ""});
        }
    }


    render() {
        return (
            <div>
                <h1>Add New Players Below:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Name: </label>
                    <input type="text" placeholder="Cambridge Fry" value={(this.state.playerName)} onChange={this.handleTextChange}/>
                    <button>Add Player</button>
                </form>
            </div>
        )
    }



}

export default AddPlayer;