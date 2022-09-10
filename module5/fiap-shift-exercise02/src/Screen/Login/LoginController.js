import React, { Component } from 'react';

class LoginController extends Component {
    construtor(){
        super();

        this.state = {
            isLoading: 0,
        };
    }

    onClickButton= () =>{
        this.setState({
            isLoading: true,
        });
    };
    
    render() {
        return (
        <LoginView
        isLoading={this.state.isLoading}
        onClickButton={this.onClickButton}
        />
        );
    }
}

export default LoginController;