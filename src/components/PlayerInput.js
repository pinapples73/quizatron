import React from 'react';

import PlayerRoster from "./PlayerRoster";
import AddPlayer from "./AddPlayer";

let playerRoster = [];

const PlayerInput = (props) => {

    function handleAddPlayer(newPlayerName){
        const newPlayerDetails = {name: newPlayerName, score: 0};
        playerRoster.push(newPlayerDetails);
        props.onAddPlayer(playerRoster);
    }


    function handleStartQuiz(){
        props.onPlayersSubmit();
    }


    return (
        <div>
            <PlayerRoster newPlayerList={ playerRoster } />
            <AddPlayer onAddPlayer={ handleAddPlayer } />
            <button onClick={ handleStartQuiz }> Start Quiz </button>
        </div>

    )

}
export default PlayerInput;
