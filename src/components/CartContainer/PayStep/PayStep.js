import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form,
    Header } from 'semantic-ui-react'
    
import { userUpdateAction } from '../../../actions/UserActions';

class PayStep extends Component {

    constructor(props) {
        super(props);

        this.state = {
            User: props.User
        };
        this.state.issuing_bank = ('issuing_bank' in props.User) ? props.User.issuing_bank : '';
        this.state.voucher_number = ('voucher_number' in props.User) ? props.User.voucher_number : '';
        this.state.pay_comment = ('pay_comment' in props.User) ? props.User.pay_comment : '';
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
                    Metodo de pago
                    <Header.Subheader>
                        Proporcione la iformacion del Deposito / Transferencia, para procesar el pago.
                    </Header.Subheader>
                </Header>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input 
                            label='Banco emiso'
                            placeholder='Banco emiso'
                            value={this.state.issuing_bank}
                            onChange={this.handleChange}
                            name="issuing_bank"
                        />
                        <Form.Input 
                            label='Numero de comprobante'
                            placeholder='Numero de comprobante'
                            value={this.state.voucher_number}
                            onChange={this.handleChange}
                            name="voucher_number"
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.TextArea
                            label='Comentario'
                            placeholder='Comentario'
                            value={this.state.pay_comment}
                            onChange={this.handleChange}
                            name="pay_comment"
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

export default connect(mapStateToProps, mapDispatchToProps)(PayStep);
