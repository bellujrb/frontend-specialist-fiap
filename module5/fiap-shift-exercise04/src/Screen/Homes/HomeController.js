import React, { useState } from 'react';
import HomeView from './HomeView';

    const HomeController = () => {
    
    //STATE OLD
    //this.state = {
    //    count: 0,
    //};

    //UseState
    const [count, setCount] = useState(0)

    // Create one useState for variable
    //const [count2, setCount2] = useState(0)

    // Interval
    const interval = setInterval(() => {
        setCount((count) => count + 1)
    }, 1000);

    //Function ERROR Console
    const clickStart = (count) => {
        console.log(count);
    }

    return (
        <HomeView
        count={count}
        clickStart={clickStart}
        />
    )

}

export default HomeController;