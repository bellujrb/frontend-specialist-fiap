import React, { useEffect, useState } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import toys from '../../Services/APIs/Toys/toys';
import HomeView from './HomeView';

export default function HomeController() {

    const getToysGetAPI = useAPI(toys.getAllToys);

    useEffect(() => {
        getToysGetAPI.request();
    }, []);

    console.log(getToysGetAPI.data);
    console.log(getToysGetAPI.loading);
    
    if(getToysGetAPI.data !== null){
        console.log(getToysGetAPI.data.totalItems);
        console.log(getToysGetAPI.data.toys[0].code);
    }

    console.log(getToysGetAPI.data)
    return <HomeView arrayToys={getToysGetAPI.data} loading={getToysGetAPI.loading} />
}