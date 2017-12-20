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
            Product: props.Product,
            Category: props.Category,
            MainSearch: props.MainSearch,
            filterProducts: []
        };
    }

    filterProducts = () => {
        return this.state.Product.products.filter((item) => {
            let result = [true];

            if (this.state.MainSearch.search !== '') {
                result.push(this.state.MainSearch.search === item.name);
            }
            
            if (this.state.MainSearch.availability) {
                result.push(item.quantity > 0);
            }

            if (this.state.Category.active !== 0) {
                result.push(this.state.Category.active === item.sublevel_id);
            }

            return result.every(item => {return item});
        });
    }

    render() {
        let filterProducts = this.filterProducts();
        return (
            <Card.Group itemsPerRow={4}>
                {filterProducts.map((item, i) => {
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
    Product: state.productReducers,
    Category: state.categoryReducers,
    MainSearch: state.mainSearchReducers,
});

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (Product) => {
            dispatch(filterProduct(Product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);