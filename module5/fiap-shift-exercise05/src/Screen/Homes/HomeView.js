import React from 'react';
import './Home.css';

export default function HomeView(props) {
        return (
            <div>
                <p>COUNT: {props.count}</p>
                <button onClick={props.startButton}>START</button>
                <button onClick={props.pauseButton}>PAUSE</button>
                <button onClick={props.stopButton}>STOP</button>
            </div>
        );
    };