import React from 'react';

import '../css/PlayerInput.css'

import PlayerRoster from "./PlayerRoster";
import AddPlayer from "./AddPlayer";

let playerRoster = [];

const PlayerInput = (props) => {

    function handleAddPlayer(newPlayerName){
        if(playerRoster.length < 40) {
            const newPlayerDetails = {name: newPlayerName, score: 0};
            playerRoster.push(newPlayerDetails);
            props.onAddPlayer(playerRoster);
        } else {
            console.log("Player Limit of 40 Reached")
        }
    }


    function handleStartQuiz(){
        props.onPlayersSubmit();
    }


    return (
        <div className='player-input'>
            <PlayerRoster newPlayerList={ playerRoster } />
            <AddPlayer onAddPlayer={ handleAddPlayer } />
            <div className='player-start-quiz'>
                <button onClick={ handleStartQuiz }> Start Quiz </button>
            </div>
        </div>

    )

}
export default PlayerInput;
