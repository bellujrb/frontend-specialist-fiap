import React from 'react';
import './Home.css';

const HomeView = ({count}) => {

    return (
        <div>
            <p>COUNT: {count}</p>
            <button>Start</button>
            <button>Pause</button>
            <button>Stop</button>
            <button>Clear</button>
        </div>
    );
};

export default HomeView;