import React, { useEffect, useState } from 'react';
import useAPI from '../../Routes/RouteController';
import persons from '../../Services/Persons/persons'
import HomeView from './HomeView';
import { useNavigate } from "react-router-dom"


export default function HomeController() {

    const getPersonsAPI = useAPI(persons.getPersonsAPI);

    return (
        <HomeView 
        />
    );
}