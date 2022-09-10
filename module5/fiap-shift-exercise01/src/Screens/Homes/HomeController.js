import React, { Component } from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'

class HomeController extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: false
        }

        const homeModel = new HomeModel();
        homeModel.getSomeInfo();
    }

    render() {
        return <HomeView
        count={this.state.count} 
        clickAdd={this.clickAdd}
        clickRemove={this.clickRemove}/>;;
    }

    clickAdd = () =>{
        console.log("CLICK!")
        this.setState({
            count: !this.state.count
        })
    }

    clickRemove = () =>{
        console.log("CLICK")
        this.setState({
            count: this.state.count -1
        })
    }
}

export default HomeController;