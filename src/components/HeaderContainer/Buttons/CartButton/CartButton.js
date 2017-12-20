import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button,
    Modal,
    Step,
    Icon } from 'semantic-ui-react'

class CartButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            step: 0,
            userRegister: ('email' in props.User) ? true : false,
        };
    }

    handleClickStep = (e, {value}) => {
        this.setState({step: value});
    }

    closeModal = () => this.setState({ open: false });

    openModal = () => this.setState({ open: true });

    render() {
        return (
            <React.Fragment>
                <Button
                    as='a'
                    animated='vertical'
                    basic
                    style={{ marginLeft: '0.5em' }}
                    disabled={!this.state.userRegister}
                    onClick={this.openModal}
                >
                    <Button.Content visible>
                        <Icon name='cart'/>
                    </Button.Content>
                    <Button.Content hidden>
                        {this.props.Cart.products.length++}
                    </Button.Content>
                </Button>
                <Modal open={this.state.open} size="small">
                    <Modal.Header>Carrito de compra</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Step.Group size='mini' widths={4} attached='top'>
                                <Step
                                    link
                                    value={0}
                                    completed={this.state.step > 0}
                                    active={this.state.step === 0}
                                    onClick={this.handleClickStep}
                                >
                                    <Icon name='shopping cart'/>
                                    <Step.Content>
                                        <Step.Title>Carrito de compra</Step.Title>
                                    </Step.Content>
                                </Step>

                                <Step
                                    link
                                    value={1}
                                    completed={this.state.step > 1}
                                    active={this.state.step === 1}
                                    onClick={this.handleClickStep}
                                >
                                    <Icon name='truck' />
                                    <Step.Content>
                                        <Step.Title>Envio</Step.Title>
                                    </Step.Content>
                                </Step>

                                <Step
                                    link
                                    value={2}
                                    completed={this.state.step > 2}
                                    active={this.state.step === 2}
                                    onClick={this.handleClickStep}
                                >
                                    <Icon name='payment' />
                                    <Step.Content>
                                        <Step.Title>Pago</Step.Title>
                                    </Step.Content>
                                </Step>

                                <Step
                                    link
                                    value={3}
                                    completed={this.state.step === 3}                                
                                    disabled={this.state.step !== 3}
                                    active={this.state.step === 3}
                                    onClick={this.handleClickStep}
                                >
                                    <Icon name='info' />
                                    <Step.Content>
                                        <Step.Title>Confirmar compra</Step.Title>
                                    </Step.Content>
                                </Step>
                            </Step.Group>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.closeModal}>Cancelar</Button>
                        <Button
                            positive
                            icon='checkmark'
                            onClick={this.handleSubmit}
                            disabled={true}
                            labelPosition='right'
                            content="Procesar"
                        />
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    Cart: state.cartReducers,
    User: state.userReducers
});

export default connect(mapStateToProps)(CartButton);
    