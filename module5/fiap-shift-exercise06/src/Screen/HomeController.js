import React, { useState, useEffect } from 'react';
import HomeView from './HomeView';

const HomeController = () => {

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState("Stop")

    useEffect(() => {
        const interval = setInterval(() => {
            if (status === "Running") {
                setCount((count) => count + 1)
            }
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    })

    const startButton = () => {
        setStatus("Running")
    }

    const stopButton = () =>{
        setStatus("Stop")
        setCount(0)
    }


    return (
        <HomeView
        count={count}
        startButton={startButton}  
        stopButton={stopButton}
        />
    )
}

export default HomeController;