import React from 'react';
import './Home.css'

export default function HomeView() {

    return (
        <div className='header'>

            <div className='header-title'>
            <h1>BUSCADOR DE PESSOAS</h1>
            </div>
            
            <div className='header-button'>

                <button onClick={() => {
                    alert("System in development")
                }}
                >CLIQUE AQUI PARA BUSCAR!</button>

            </div>

        </div>
    );
}