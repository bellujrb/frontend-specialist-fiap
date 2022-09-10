import React, { Component } from 'react'
import HomeView from './HomeView'
import HomeModel from './HomeModel'

export default class HomeController extends Component {
    constructor(props){
        super (props);

        this.state = {
            count: 1
        }

        const homeModel = new HomeModel();
        homeModel.getSomeInfo();

        setInterval(() => {
            this.setState({
                count: this.state.count +1
            })
        }, 1000);
    }
    
    render() {
        return <HomeView count= {this.state.count}/>; // Criando propriedade count que estou trabalhando e colocando valor do state pra passar para a vier
    }
}