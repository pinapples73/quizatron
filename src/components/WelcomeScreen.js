import React from 'react';

const WelcomeScreen = (props) => {

    function handleClick(){
        props.onClick();
    }

    return (
        <div>
            <h1>Welcome To Quizatron</h1>
            <p>Ready to begin?</p>
            <button onClick={handleClick}>Click Here</button>
        </div>
    );

}

export default WelcomeScreen;