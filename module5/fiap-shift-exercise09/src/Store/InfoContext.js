import React from 'react';
import { createContext } from 'react';
import {useEffect, useState, useContext} from "react";

export const InfoContext = createContext({ 
    info: "",
    onChangeInfo: () => {},
});

export const InfoContextProvider = (props) => {

    const [info, setInfo] = useState("Context it is function")

    const onChangeInfo = (newInfo) => {
        setInfo(newInfo)
    }

    return (
        <InfoContext.Provider
        value={{
            info: info, 
            onChangeInfo: onChangeInfo,
        }}
        > 
            {props.children}
            </InfoContext.Provider>
    ); //
}; 