import React, { useState, useEffect, useLayoutEffect } from 'react';
import HomeView from './HomeView';

    const HomeController = () => {

    useEffect(() => {
        // Uso Pouco
        console.log("Chamar depois do render")
        return () => {
        console.log("Chamar antes do render")
        //USO MUITO POUCO, RARISSIMO USAR.
        };
    })

    useEffect(() => {
        //Componente Did Mount
        console.log("Montar o componente")
        // Antes de chamar a API
        // Quando eu listar o internal
        // Buscar o BD
        return () => {
        console.log("Desmontar o componente")
        //Componente WILL UMOUNT
        //Limpar o interval
        //Fechar a conexao com o banco
        //Cancelar uma conexao 
        };
        }, [])

    useEffect(() => {
        console.log("Antes de executar a informacao antes do render")
        //Trabalhando com states globais // Redux
        return () => {
        console.log("Antes de alterar a informacao depois do render")
        //Uso Pouco
        };
    }, [count])

    //UseState
    const [count, setCount] = useState(0)

    //const [count2, setCount2] = useState(0)

    const clickStart = () => {
        setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
        console.log(count);
    }

    const clickPause = () => {
        
    }

    const clickReset = () => {
        setCount(0);
        console.log(count);
    }

    return (
        <HomeView
        count={count}
        clickStart={clickStart}
        clickPause={clickPause}
        clickReset={clickReset}
        />
    )

}

export default HomeController;