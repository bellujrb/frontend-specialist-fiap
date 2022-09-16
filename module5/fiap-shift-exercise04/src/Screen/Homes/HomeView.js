import React from 'react';
import './Home.css';

export default function  HomeView (props)  {

    return (
        <div>
            <p>COUNT: {props.count}</p>
            <button onClick={props.clickStart}>Start</button>
            <button onClick={props.clickPause}>Pause</button>
            <button onClick={props.clickReset}>Reset</button>
        </div>
    );
};