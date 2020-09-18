import React from 'react';

import Timer from './Timer';


const NewTextQuestion = (props) => {

    function handleContinue(){
        props.onNext();
    }

    return (
        <div>
            {/*<h3>Round {props.currentTask.roundNumber} - {props.currentTask.roundTitle}</h3>*/}
            <h3>Question {props.currentTask.questionNumber}</h3>
            <h2>{props.currentTask.question}</h2>
            <Timer/>
            <p>
                <button onClick={handleContinue}>Continue</button>
            </p>
        </div>

    )

}

export default NewTextQuestion;