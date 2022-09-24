import React from 'react'
import HomeView from './HomeView'
import useAPI from '../../Services/APIs/Commons/useAPI'
import {useEffect, useState, useContext} from "react";
import { InfoContext } from "../../Store/InfoContext";

export default function HomeController () {
    
    const {data, loading} = useAPI('https://api.github.com/users/belluzzojr')
  
    const context = useContext(InfoContext); //state de todo meu context

    return (
      <>
          <HomeView
            data={data}
            loading={loading}
            info={context.info}/>
      </>
    )
}
