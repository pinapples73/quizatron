import React from "react";

import NewRoundDisplay from "./NewRoundDisplay";
import NewTextQuestion from "./NewTextQuestion";


const Quiz = (props) => {

    const currentTask = props.quizData[props.quizProgress];

    function handleNext(){
        const nextPage = props.quizProgress + 1;
        props.onNext(nextPage);
    }

    const quizDetails = () => {
        switch(currentTask.type){
            case 'round title screen': return (<NewRoundDisplay onNext={ handleNext } currentTask={ currentTask }/>)
            case 'q text': return (<NewTextQuestion onNext={ handleNext } currentTask={ currentTask }/>)
            default: return (<p>An Error has occurred</p>)
        }

    }


    return (
        <div>{ quizDetails() }</div>
    )
}

export default Quiz;