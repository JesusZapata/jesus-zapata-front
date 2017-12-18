import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button,
    Icon,
    Image,
    Label } from 'semantic-ui-react'

import './UserButton.css';

class UserButton extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            User: props.User,
            userRegister: ('email' in props.User) ? true : false,
        };
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.userRegister &&
                <Button as='a' secondary style={{ marginLeft: '0.5em' }} >
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

const mapStateToProps = (state, ownProps) => ({
    User: state.UserReducers
});

export default connect(mapStateToProps)(UserButton)