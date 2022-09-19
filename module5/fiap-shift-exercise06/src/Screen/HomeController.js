import React, { useState, useEffect } from 'react';
import HomeView from './HomeView';

const HomeController = () => {

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState("Stop")

    useEffect(() => {
        const internal = () => {
            if (status === "Running") {
                setInterval(() => {
                    setCount((count) => count + 1)
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


    return (
        <HomeView
        count={count}
        startButton={startButton}  
        />
    )
}

export default HomeController;