import React from "react";
import Player from "./Player";

const PlayerRoster = (props) => {
    const playerList = props.newPlayerList.map(player => {
        return (
            <Player name={player.name} />
        );
    });

    console.log("PLAYER LIST: ", playerList)

    return (
        <div>
            <h1>Players</h1>
            <ul> { playerList } </ul>

        </div>

    )
}

export default PlayerRoster;