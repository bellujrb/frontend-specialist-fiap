import React from 'react';

export default function HomeView ({props, info})  {
    
    return (
        <div className='App'>

                <button onClick={() =>{
                    alert("TESTE BELOW")
                    alert(info);
                }}>
                    CLIQUE HERE
                </button> 
        </div>
    )
}