import React from 'react';

const Timer = () => {
    const [counter,setCounter] = React.useState(10);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter -1), 1000);
    })

    return (
        <div> Countdown: {counter} </div>
    )
}

export default Timer;