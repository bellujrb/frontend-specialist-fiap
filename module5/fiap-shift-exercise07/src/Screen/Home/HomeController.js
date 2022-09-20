import React, { useEffect, useState } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import toys from '../../Services/APIs/Toys/toys';
import HomeView from './HomeView';
import { useNavigate } from "react-router-dom"

export default function HomeController() {

    const getToysGetAPI = useAPI(toys.getAllToys);
    const navigate = useNavigate();

    useEffect(() => {
        getToysGetAPI.request();
    }, []);

    const goToPage = (toy) => { // Quando chamar, ele vai ver qual toy que cliquei e pegar ID + passar page
        navigate("/detail/" + toy._id, {
            state: {
                toy: JSON.stringify(toy),
            },
        });
    }

    console.log(getToysGetAPI.data);
    console.log(getToysGetAPI.loading);
    
    if(getToysGetAPI.data !== null){
        console.log(getToysGetAPI.data.totalItems);
        console.log(getToysGetAPI.data.toys[0].code);
    }

    console.log(getToysGetAPI.data)
    return <HomeView 
    arrayToys={getToysGetAPI.data} 
    loading={getToysGetAPI.loading} 
    goToPage={goToPage}/>
}