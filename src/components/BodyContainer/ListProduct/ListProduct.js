import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card,
    Label,
    Button,
    Icon,
    Image } from 'semantic-ui-react'

import { filterProduct } from '../../../actions/ProductActions';
import image from '../../../assets/images/image.png';

import './ListProduct.css';

class ListProduct extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            Product: props.Product
        };
    }

    render() {
        return (
            <Card.Group itemsPerRow={3}>
                {this.state.Product.products.map((item, i) => {
                    return (
                        <Card fluid={true} key={item.id}>
                            <Image src={image} size='medium'/>
                            <Card.Content>
                                <Card.Header>{item.name}</Card.Header>
                                <Card.Meta>{item.price}<br/>{item.quantity} Unit.</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <Button as='div' labelPosition='right'>
                                    <Button icon>
                                        <Icon name='heart'/>
                                    </Button>
                                    <Label as='a' basic pointing='left'>{item.like}</Label>
                                </Button>
                                <Button icon primary floated="left">
                                    <Icon name='plus cart' />
                                </Button>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    Product: state.productReducers
});

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (Product) => {
            dispatch(filterProduct(Product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);