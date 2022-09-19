import React, { useState, useEffect } from 'react';
import HomeView from '../../../../fiap-shift-exercise04/src/Screen/Homes/HomeView';

const HomeController = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
        return(() =>{
            clearInterval((count));
        })
    })

    const startButton = () => {
        
    }

    return (
        <HomeView
        count={count}
        />
    )
}

export default HomeController;