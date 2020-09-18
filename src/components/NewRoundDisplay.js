import React from "react";

const NewRoundDisplay = (props) => {

    function handleClick(){
        props.onNext();
    }

    return (
        <div>
            <h1>Round {props.currentTask.roundNumber}</h1>
            <h2>{props.currentTask.roundTitle}</h2>
            <button onClick={handleClick}>Continue</button>
        </div>

)

}

export default NewRoundDisplay;