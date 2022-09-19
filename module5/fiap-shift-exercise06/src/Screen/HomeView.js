import React from 'react';
import './Home.css';

export default function HomeView (props) {
        return (
            <div>
            <h1>COUNT: {props.count}</h1>
            <button onClick={props.startButton}>START BUTTON</button>
            </div>
        );
    };