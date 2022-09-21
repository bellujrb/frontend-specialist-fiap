import React from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import './Home.css'

    export default function HomeView(){

        const { data, loading } = useAPI('https://api.github.com/users/belluzzojr');

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div className='header'>

            <div className='header-title'>
            <h1>BUSCADOR DO MEU PERFIL DO GITHUB</h1>
            </div>

            <div className='header-button'>
                <button onClick={() => {
                alert("user is " + data.name + " he has  "
                + data.followers + " Followers")}}
                >CLIQUE AQUI PARA BUSCAR!
                </button>
            </div>
        </div>
    );
}