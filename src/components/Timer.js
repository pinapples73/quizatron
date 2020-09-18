import React, { useState, useEffect } from 'react';


const Timer = () => {

    const [seconds,setSeconds] = useState(10);
    const [isActive, setIsActive] = useState(false);


    function toggleTimer(){
        setIsActive(!isActive);
    }

    function resetTimer(){
        setSeconds(10);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div> Countdown: {seconds}
                <button onClick={toggleTimer}>Toggle Timer</button>
                <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Timer;