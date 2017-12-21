import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form,
    Header } from 'semantic-ui-react'
    
import { userUpdateAction } from '../../../actions/UserActions';

class AddressStep extends Component {

    constructor(props) {
        super(props);

        this.state = {
            User: props.User
        };
        this.state.state = ('state' in props.User) ? props.User.state : '';
        this.state.city = ('city' in props.User) ? props.User.city : '';
        this.state.address = ('address' in props.User) ? props.User.address : '';
    }

    handleChange = (event, {name, value}) => {
        this.setState((prevState, props) => {
            prevState[name] = value;
            prevState.User[name] = value;
            this.props.userUpdateAction(prevState.User);
            return prevState;
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header size='medium'>
                    Dirección de envio
                    <Header.Subheader>
                        Proporcione la direccion en donde se va a enviar el producto.
                    </Header.Subheader>
                </Header>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input 
                            label='Estado'
                            placeholder='Estado'
                            value={this.state.state}
                            onChange={this.handleChange}
                            name="state"
                        />
                        <Form.Input 
                            label='Ciudad'
                            placeholder='Ciudad'
                            value={this.state.city}
                            onChange={this.handleChange}
                            name="city"
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.TextArea
                            label='Direccion detallada'
                            placeholder='Direccion detallada'
                            value={this.state.address}
                            onChange={this.handleChange}
                            name="address"
                        />
                    </Form.Group>
                </Form>
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    User: state.userReducers
});

const mapDispatchToProps = (dispatch) => {
    return {
        userUpdateAction: (User) => {
            dispatch(userUpdateAction(User));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressStep);
