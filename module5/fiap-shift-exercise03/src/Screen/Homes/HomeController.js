import React, { Component } from 'react';
import HomeView from './HomeView';
import HomeModel from './HomeModel';

class HomeController extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }

        const homeModel = new HomeModel();
        homeModel.getSomeInfo();

    }

    componentDidMount(){
        console.log("Mount...")

        this.interval = setInterval(() =>{
        
            if(this.state.status === "Running"){
                this.setState({
                    count: this.state.count +1,
                });
            }
        }, 1000)
    }

    componentWillUnmount(){
        console.log("Unmount...")

        if (this.state.status === "Paused"){
            return false
        } else {
            return true
        }
    }

    start = () =>{
        this.setState({
            status: "Running"
        })
    }

    paused = () =>{
        this.setState({
            status: "Paused"
        })
    }

    reset = () =>{
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <HomeView
            count={this.state.count}
            start={this.start}
            paused={this.paused}
            reset={this.reset}
            />
        );
    }
}

export default HomeController;