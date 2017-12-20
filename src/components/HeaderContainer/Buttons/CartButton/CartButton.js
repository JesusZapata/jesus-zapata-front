import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button,
    Modal,
    Icon } from 'semantic-ui-react'

import CartContainer from '../../../CartContainer';

class CartButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
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
                        {this.props.Cart.products.length}
                    </Button.Content>
                </Button>
                <Modal open={this.state.open} size="small">
                    <Modal.Header>Procesar compra</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <CartContainer/>
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
    