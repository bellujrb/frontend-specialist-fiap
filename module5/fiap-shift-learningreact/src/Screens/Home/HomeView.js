import React from 'react';
import './Home.css'

const HomeView = (props) => {
    return (
        <div className='App'>
            <p>Hello Controller { props.count }</p>
        </div>
    );
};

export default HomeView;