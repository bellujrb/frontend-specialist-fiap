import React, { useState, useEffect, useRef } from 'react';
import HomeView from './HomeView';

const HomeController = () => {

    const [status, setStatus] = useStatus("Stop")
    const [count, setCount] = useState(0)
    
    useEffect(() =>{
    //MOUNT
    if (status === "Running"){
    const internal = () => {
        setInterval(() => {
            setCount((count) => count + 1)
        }, 1000);
    }}
    return (() => {
    //UNMOUNT
        clearInterval(internal);
    })
    })

    const start = () =>{
        setStatus("Running")
    }


    return (
        <HomeView
        count={count}
        start={start}  
        />
    )
}

export default HomeController;