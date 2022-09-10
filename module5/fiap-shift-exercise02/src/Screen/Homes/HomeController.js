import React, { Component } from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'

class HomeController extends Component {
    constructor(props){
        super(props);

        //gerando logs da props
        console.log("Chamando construtor()")
        console.log(props)

        this.state = {
            count: 0
        };
    }

        componentDidMount(){
            console.log("Chamando componentDidMount")
            //iniciando o timeout
            this.interval = setInterval(() =>{
            // atualizando contador
            this.setState({
                count: this.state.count +1,
            });
        }, 3000);
    }

    shouldComponentUpdate(nextProps, nextState){
        // So ira atualizar quando o count for diferente de 1
        if (this.state.count ===1){
            console.log("Chamando shouldComponentUpgate = true")
            return false;
        } else {
            console.log("Chamando shouldComponentUPGATE = TRUE")
            return true;
        }
    }

    componentDidUpgate(prevProps, prevState, snapshot){
        console.log("CHAMANDO DID UPGATE")
    }
    
    render() {
        console.log(" Chamando Render " + this.state.count);
        return (
        //Chamando o VIEW e passando o pros count_info 
        <HomeView
        count={this.state.count} />
        );
    }
}

export default HomeController;