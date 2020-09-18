import React from "react";
import Player from "./Player";


const PlayerRoster = (props) => {
    const playerList = props.newPlayerList.map((player, index) => {
        return (
            <Player name={player.name} key={index} playerNumber={index}/>
        );
    });

    console.log("PLAYER LIST: ", playerList)

    return (
        <div className='player-roster'>
            <h2 className='player-screen-title'>Players</h2>
            <div className='player-list'> { playerList } </div>

        </div>

    )
}

export default PlayerRoster;