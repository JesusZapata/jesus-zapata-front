import React, { Component } from 'react';

import { Button,
    Icon,
    Image,
    Label } from 'semantic-ui-react'

import './LogInButton.css';

class LogInButton extends Component {
    
    constructor(props) {
        super(props);

        const User = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : false;

        this.state = {
            User: User,
            userRegister: User ? true : false,
        };
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.userRegister &&
                <Button as='a' primary style={{ marginLeft: '0.5em' }} >
                    <Icon name='user circle outline'/>
                    Iniciar sesión
                </Button>}
                {this.state.userRegister &&
                <Label as='a' color="blue">
                    <Image avatar spaced='right' src='https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg' />
                    {this.state.User.full_name}
                </Label>}
            </React.Fragment>
        );
    }

}

export default LogInButton;