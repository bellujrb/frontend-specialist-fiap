import React, { useEffect, useState } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import HomeView from './HomeView';
import { useNavigate } from "react-router-dom"


export default function HomeController() {
    return (
        <HomeView 
        />
    );
}