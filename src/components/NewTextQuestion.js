import React from 'react';

import Timer from './Timer';


const NewTextQuestion = (props) => {

    function handleClick(){
        props.onNext();
    }

    return (
        <div>
            <h3>Round {props.currentTask.roundNumber} - {props.currentTask.roundTitle}</h3>
            <h2>Question {props.currentTask.questionNumber}: {props.currentTask.question}</h2>
            <Timer/>
            <button onClick={handleClick}>Continue</button>
        </div>

    )

}

export default NewTextQuestion;