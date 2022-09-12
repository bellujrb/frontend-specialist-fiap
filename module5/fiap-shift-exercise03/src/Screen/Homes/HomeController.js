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

    stop = () =>{
        this.setState({
            status: "Ending"
        })
    }

    clear = () =>{
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
            stop={this.stop}
            clear={this.clear}
            />
        );
    }
}

export default HomeController;