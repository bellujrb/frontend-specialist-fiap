import React from 'react';

export default function HomeView ({data, loading}){

    return (
      <div className='App'>
        <h2>GITHUB API</h2>
        <button onClick={() => {
          alert("PUXANDOS DADOS DO: " + data.name);
          alert("SEGUIDORES: " + data.followers);
        }}>
          CLIQUE AQUI
        </button>
      </div>
    )
}