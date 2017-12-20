import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button,
    Form,
    Icon,
    Modal } from 'semantic-ui-react'

import { userRegisterAction } from '../../../../actions/UserActions';

import './RegisterButton.css';

class RegisterButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            full_name: '',
            email: '',
            password: '',
            accept: false,
            formErrors: {
                full_name: false,
                email: false,
                password: false,
                accept: false,
            },
            hasFormErrors: true,
            User: props.User,
            userRegister: ('email' in props.User) ? true : false,
        };
    }

    handleChange = (event, {name, value, checked}) => {
        this.setState((prevState) => {
            prevState[name] = value  ? value : checked;
            prevState.hasFormErrors = (
                !(prevState.full_name &&
                    prevState.email &&
                    prevState.password &&
                    prevState.accept)
            );
            return prevState;
        });
    }

    handleSubmit = (event) => {
        this.setState((prevState) => {
            prevState.formErrors = {
                full_name: (this.state.full_name === ''),
                email: (this.state.email === ''),
                password: (this.state.password === ''),
                accept: (this.state.accept === false),
            }
            prevState.hasFormErrors = (
                !(prevState.full_name &&
                    prevState.email &&
                    prevState.password &&
                    prevState.accept)
            );
            if (!prevState.hasFormErrors) {
                const User = {
                    full_name: prevState.full_name,
                    email: prevState.email,
                    password: prevState.password,
                };
                
                prevState.User = User;
                prevState.userRegister = true;
                this.props.register(User);
            }
            return prevState;
        });
        this.closeModal();
        event.preventDefault();
    }

    closeModal = () => this.setState({ open: false });

    openModal = () => this.setState({ open: true });
    
    render() {
        return (
            <React.Fragment>
                {!this.state.userRegister &&
                <React.Fragment>
                    <Button as='a' primary onClick={this.openModal}>
                        <Icon name='add user'/>
                        Registrarse
                    </Button>
                    <Modal open={this.state.open} size="small">
                        <Modal.Header>Registrar usuario</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <p>Registrate para disfrutar de las ofertas que "El baratón" tiene para ti.</p>
                                <Form size="small" onSubmit={this.handleSubmit}>
                                    <Form.Field required>
                                        <label>Nombre Apellido</label>
                                        <Form.Input
                                            value={this.state.full_name}
                                            onChange={this.handleChange}
                                            name="full_name"
                                            placeholder='Nombre Apellido'
                                            error={this.state.formErrors.full_name}
                                        />
                                    </Form.Field>
                                    <Form.Field required>
                                        <label>Correo electronico</label>
                                        <Form.Input
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            name="email"
                                            type="email"
                                            placeholder='Correo electronico'
                                            error={this.state.formErrors.email}
                                        />
                                    </Form.Field>
                                    <Form.Field required>
                                        <label>Contraseña</label>
                                        <Form.Input
                                            type="password"
                                            value={this.state.password || ''}
                                            onChange={this.handleChange}
                                            name="password"
                                            icon={<Icon name='eye' link />}
                                            placeholder='Contraseña'
                                            error={this.state.formErrors.password}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Checkbox
                                            name="accept"
                                            defaultIndeterminate={false}
                                            checked={!!this.state.accept}
                                            onChange={this.handleChange}
                                            error={this.state.formErrors.accept}
                                            label='Acepto todos los terminos y condiciones.' />
                                    </Form.Field>
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={this.closeModal}>Cerrar</Button>
                            <Button
                                positive
                                icon='checkmark'
                                onClick={this.handleSubmit}
                                disabled={this.state.hasFormErrors}
                                labelPosition='right'
                                content="Registrar"/>
                        </Modal.Actions>
                    </Modal>
                </React.Fragment>}
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    User: state.userReducers
});

const mapDispatchToProps = (dispatch) => {
    return {
        register: (User) => {
            dispatch(userRegisterAction(User));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterButton)