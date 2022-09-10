import React from 'react';
import './Home.css'

const HomeView = (props) => {

    let box; 

    if(props.count){
        box = <div className='boxGreen'></div>
    } else {
        box = <div className='boxRed'></div>
    }

    return (
        <div className='App'>
            {box}
            <p>COUNT: { props.count }</p>
            <button className='clickButton' onClick={ props.clickAdd }>CLICK ADD</button>
            <button className='clickButton' onClick={ props.clickRemove}>CLICK REMOVE</button>
        </div>
    );
};

export default HomeView;