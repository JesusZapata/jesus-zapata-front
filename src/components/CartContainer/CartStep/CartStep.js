import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button,
    Icon,
    Table,
    Header } from 'semantic-ui-react'

import { deleteProductToCart } from '../../../actions/CartActions';

class CartStep extends Component {

    handleClickDelete = (e, {value}) => {
        this.setState((prevState, props) => {
            props.Cart.products = props.Cart.products.filter(function(item) { 
                return item.id !== value
            })
            this.props.deleteProductToCart(props.Cart.products);
            return props;
        });
    }

    closeModal = () => this.setState({ open: false });

    openModal = () => this.setState({ open: true });

    render() {
        return (
            <React.Fragment>
                <Header size='medium'>
                    Carrito de compra
                    <Header.Subheader>
                        Confirme los productos anexado al carrito de compra, en esta vista puede eliminar
                        productos del carrito de compra.
                    </Header.Subheader>
                </Header>
                <Table compact celled size='small'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Nombre</Table.HeaderCell>
                            <Table.HeaderCell>Precio</Table.HeaderCell>
                            <Table.HeaderCell>Cantidad</Table.HeaderCell>
                            <Table.HeaderCell>Acción</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.Cart.products.map((item, i) => {
                            return (
                                <Table.Row key={i}>
                                    <Table.Cell>{i + 1}</Table.Cell>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.price}</Table.Cell>
                                    <Table.Cell>1</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Button
                                            icon
                                            value={item.id}
                                            size='mini'
                                            color='red'
                                            inverted
                                            title="Eliminar"
                                            onClick={this.handleClickDelete}
                                        >
                                            <Icon name='trash' />
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    Cart: state.cartReducers
});

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProductToCart: (products) => {
            dispatch(deleteProductToCart(products));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartStep);
    