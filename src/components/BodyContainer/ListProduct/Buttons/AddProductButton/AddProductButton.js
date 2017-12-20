import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button,
    Icon } from 'semantic-ui-react'

import { addProductToCart } from '../../../../../actions/CartActions';

import './AddProductButton.css';

class AddProductButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    handleButtonClick = () => {
        this.setState((prevState, props) => {
            prevState.loading = true;
            props.Cart.products.push(this.props.product);
        });

        setTimeout(() => {
            this.setState({loading: false})
        }, 500);

        this.props.addProductToCart(this.props.product);
    }

    render() {
        return (
            <Button
                icon
                primary
                loading={this.state.loading}
                onClick={this.handleButtonClick}
                floated='right'
            >
                <Icon name='plus cart'/>
            </Button>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    Cart: state.cartReducers,
});

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (ProductSelect) => {
            dispatch(addProductToCart(ProductSelect));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductButton);
