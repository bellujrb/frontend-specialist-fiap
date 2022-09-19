import React, { useState, useEffect } from 'react';
import HomeView from './HomeView';

const HomeController = () => {

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState("Stopping")

    useEffect (() =>{
        const internal = () =>{
            if(status === "Running"){
                setInterval(() => {
                    setCount((count) => count +1)
                }, 1000);
            }
        }
        return (() => {
            clearInterval(internal);
        })
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