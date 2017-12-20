import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Icon,
    Table,
    Header } from 'semantic-ui-react'

class ProcessStep extends Component {

    render() {
        return (
            <React.Fragment>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='flag checkered' circular />
                    <Header.Content>
                        Su compra ha sido procesada exitosamente
                    </Header.Content>
                    <Header.Subheader>
                        En la parte de abajo puede encontrar el detalle de la compra, Gracias por su compra !
                    </Header.Subheader>
                </Header>
                <Table compact celled size='small'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Nombre</Table.HeaderCell>
                            <Table.HeaderCell>Precio</Table.HeaderCell>
                            <Table.HeaderCell>Cantidad</Table.HeaderCell>
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

export default connect(mapStateToProps)(ProcessStep);
