import React, { useContext, useState, useEffect } from 'react'
import { InfoContext } from '../../ContextStudy/InfoContext';
import HomeView from '../Home/HomeView';

const HomeController = () => {

    const context = useContext(InfoContext);

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState("OFF")

    useEffect(() => {
        const interval = setInterval(() => {
            if(status === "ON"){
                setCount((count) => count + 1)
            }
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    })

    const startButton = () => {
        setStatus("ON")
    }    

    const stopButton = () => {
        setStatus("OFF")
        setCount(0)
    }

    return (
        <HomeView
        count={count}
        status={status}
        info={context.info}
        startButton={startButton}
        stopButton={stopButton}/>
    )
}

export default HomeController;
