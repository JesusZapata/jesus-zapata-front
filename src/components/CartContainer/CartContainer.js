import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Step,
    Icon } from 'semantic-ui-react'

import CartStep from './CartStep';
import AddressStep from './AddressStep';
import PayStep from './PayStep';
import ProcessStep from './ProcessStep';

class CartContainer extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            step: 0
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
                        disabled={this.props.process}
                        completed={this.state.step > 0}
                        active={this.state.step === 0 && !this.props.process}
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
                        disabled={this.props.process}
                        completed={this.state.step > 1}
                        active={this.state.step === 1 && !this.props.process}
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
                        disabled={this.props.process}
                        completed={this.state.step > 2}
                        active={this.state.step === 2 && !this.props.process}
                        onClick={this.handleClickStep}
                    >
                        <Icon name='payment' />
                        <Step.Content>
                            <Step.Title>Pago</Step.Title>
                        </Step.Content>
                    </Step>

                    <Step
                        link
                        completed={this.props.process}                                
                        disabled={!this.props.process}
                        active={this.props.process}
                    >
                        <Icon name='info' />
                        <Step.Content>
                            <Step.Title>Compra confirmada</Step.Title>
                        </Step.Content>
                    </Step>
                </Step.Group>                
                { (this.state.step === 0 && !this.props.process) ? 
                    <CartStep/> :
                    <React.Fragment/>
                }
                { (this.state.step === 1 && !this.props.process)  ?
                    <AddressStep/> :
                    <React.Fragment/>
                }
                { (this.state.step === 2 && !this.props.process)  ?
                    <PayStep/> :
                    <React.Fragment/>
                }
                { this.props.process ?
                    <ProcessStep/> :
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
    