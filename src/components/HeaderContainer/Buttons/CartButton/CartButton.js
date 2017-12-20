import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button,
    Modal,
    Icon } from 'semantic-ui-react'

import CartContainer from '../../../CartContainer';

import { clearCart } from '../../../../actions/CartActions';

class CartButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            process: false,
            userRegister: ('email' in props.User) ? true : false,
        };
    }

    handleClickStep = (e, {value}) => {
        this.setState({step: value});
    }

    handleProcessButton = () => {
        this.setState({process: true});
        this.props.clearCart();
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
                        {this.props.Cart.products.length}
                    </Button.Content>
                </Button>
                <Modal open={this.state.open} size="small">
                    <Modal.Header>Procesar compra</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <CartContainer process={this.state.process}/>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.closeModal}>Cerrar</Button>
                        <Button
                            positive
                            icon='checkmark'
                            onClick={this.handleProcessButton}
                            disabled={
                                !((this.props.Cart.products.length > 0) &&
                                this.props.User.email !== '' &&
                                this.props.User.full_name !== '' &&
                                this.props.User.issuing_bank !== '' &&
                                this.props.User.voucher_number !== '' &&
                                this.props.User.state !== '' &&
                                this.props.User.city !== '')
                            }
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

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => {
            dispatch(clearCart());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
    