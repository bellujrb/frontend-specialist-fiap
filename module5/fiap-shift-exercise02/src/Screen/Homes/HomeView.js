import React from 'react';
import './Home.css';

const HomeView = (props) => {

    return (
        <div className='App'>
        <p>COUNT: {props.count}</p>
        <button onClick={ props.onClickButton } className='onClickButton'>CLICK</button>
        </div>
    );
};

export default HomeView;