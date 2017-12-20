import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Step,
    Icon } from 'semantic-ui-react'

import CartStep from './CartStep';
import AddressStep from './AddressStep';

class CartContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 0,
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
                            <Step.Title>Dirección de envio</Step.Title>
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
                { this.state.step === 0 ?
                    <CartStep/> :
                    <React.Fragment/>
                }
                { this.state.step === 1 ?
                    <AddressStep/> :
                    <React.Fragment/>
                }
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    Cart: state.cartReducers
});

export default connect(mapStateToProps)(CartContainer);
    