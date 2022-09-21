import React from 'react'
import HomeView from './HomeView'
import useAPI from '../../Services/APIs/Commons/useAPI'


export default function HomeController () {
    
    const {data, loading} = useAPI('https://api.github.com/users/belluzzojr')
  
    return (
      <HomeView
      data={data}
      loading={loading}/>
    )
}
