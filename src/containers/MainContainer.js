import React, {Component} from 'react';

import WelcomeScreen from "../components/WelcomeScreen";
import LoadQuizData from "../components/LoadQuizData";
import PlayerInput from "../components/PlayerInput";
import Quiz from "../components/Quiz";


class MainContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            quizStatus: "introduction",
            quizData: [],
            players: [],
            quizProgress: 0
        }
        this.handleStart = this.handleStart.bind(this);
        this.handleDataSubmit = this.handleDataSubmit.bind(this);
        this.handlePlayersSubmit = this.handlePlayersSubmit.bind(this);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }


    handleStart(){
        this.setState({quizStatus: 'load'});
    }

    handleDataSubmit(loadedData){
        this.setState({quizData: loadedData, quizStatus: 'player input'});
    }

    handlePlayersSubmit(){
        this.setState({quizStatus: 'start quiz'});
    }

    handleAddPlayer(playerRoster){
        this.setState({players: playerRoster});
    }

    handleNext(nextPage){
        this.setState({quizProgress: nextPage});
    }

    render(){
        const displayDetails = () => {
            switch(this.state.quizStatus){
                case 'introduction': return (<WelcomeScreen onClick={this.handleStart} />);
                case 'load': return (<LoadQuizData onDataSubmit={this.handleDataSubmit} />);
                case 'player input': return (<PlayerInput playerData={this.state.players} onAddPlayer={this.handleAddPlayer} onPlayersSubmit={this.handlePlayersSubmit}/>);
                case 'start quiz': return (<Quiz playerRoster={this.state.players} quizData={this.state.quizData} quizProgress={this.state.quizProgress} onNext={this.handleNext}/>)
                default: return (<p>An Error has occurred</p>)
            }
        }
        return (
            <div>{ displayDetails() }</div>
        )
    }
}


export default MainContainer;