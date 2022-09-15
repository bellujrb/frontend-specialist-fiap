import React from 'react';
import './Home.css';

export default function  HomeView ( { count }, { clickStart } )  {

    return (
        <div>
            <p>COUNT: {count}</p>
            <button onClick={clickStart}>Start</button>
            <button>Pause</button>
            <button>Reset</button>
        </div>
    );
};