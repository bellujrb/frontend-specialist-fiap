import React, { useState, useEffect } from 'react';
import HomeView from './HomeView';

const HomeController = () => {

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState("Stopping")

    useEffect(() => {
        const interval = setInterval(() => {
        if(status === "Running"){
        setCount((count) => count +1)
        }
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    })

    const startButton = () => {
        setStatus("Running")
    }

    const pauseButton = () => {
        setStatus("Paused")
    }

    const stopButton = () => {
        setStatus("Stopping")
        setCount(0)
    }

    return (
        <HomeView
        count={count}
        startButton={startButton}
        pauseButton={pauseButton}
        stopButton={stopButton}
        />
    )
}

export default HomeController;