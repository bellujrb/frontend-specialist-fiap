import React from 'react';
import './Home.css';

export default function HomeView (props) {
        return (
            <div>
            <button onClick={props.start}>
                START COUNT
            </button>
            </div>
        );
    };