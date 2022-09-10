import React, { Component } from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'

class HomeController extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }

        const homeModel = new HomeModel();
        homeModel.getSomeInfo();
    }
    
    render() {
        return <HomeView
        count={this.state.count} 
        onClickButton={this.onClickButton}
        />
    }

    onClickButton = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default HomeController;