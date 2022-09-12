import React from 'react';
import './Home.css';

const HomeView = (props) => {

    return (
        <div>
            <p>COUNT: {props.count}</p>
            <button onClick={props.start}>Start</button>
            <button onClick={props.paused}>Pause</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    );
};

export default HomeView;