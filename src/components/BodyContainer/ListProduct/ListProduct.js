import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card,
    Dropdown,
    Icon,
    Image } from 'semantic-ui-react'

import { filterProduct } from '../../../actions/ProductActions';

import AddProductButton from './Buttons/AddProductButton';

import image from '../../../assets/images/image.png';
import './ListProduct.css';

class ListProduct extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            Product: props.Product,
            Category: props.Category,
            MainSearch: props.MainSearch,
            sort_name: 'ASC',
            sort_price: '',
            sort_available: '',
            sort_quantity: '',
        };
    }

    handleChange = (event, {name, value}) => {
        this.setState((prevState, props) => {
            prevState.sort_name = '';
            prevState.sort_price = '';
            prevState.sort_available = '';
            prevState.sort_quantity = '';
            prevState[name] = value;
            return prevState;
        });
    }

    sortProducts = (products) => {
        let sort_name = this.state.sort_name;
        let sort_price = this.state.sort_price;
        let sort_available = this.state.sort_available;
        let sort_quantity = this.state.sort_quantity;
        
        if (sort_name) {
            products = products.sort(function(a, b) {
                if (sort_name === 'ASC') {
                    return b.name.toLowerCase() < a.name.toLowerCase();
                }
                return b.name.toLowerCase() > a.name.toLowerCase();
            });
        }

        if (sort_price) {
            products = products.sort(function(a, b) {
                if (sort_price === 'ASC') {
                    return b.price.toLowerCase() < a.price.toLowerCase();
                }
                return b.price.toLowerCase() > a.price.toLowerCase();
            });
        }

        if (sort_available) {
            products = products.sort(function(a, b) {
                if (sort_available === 'ASC') {
                    return b.available === a.available;
                }
                return b.available !== a.available;
            });
        }

        if (sort_quantity) {
            products = products.sort(function(a, b) {
                if (sort_quantity === 'ASC') {
                    return b.quantity < a.quantity;
                }
                return b.quantity > a.quantity;
            });
        }

        return products;
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
        let filterProducts = this.sortProducts(this.filterProducts());

        let sortOptions = [
            {text: 'Asc', value: 'ASC'},
            {text: 'Desc', value: 'DESC'}
        ];

        return (
            <React.Fragment>
                <span>
                    <Icon name='sort'/>Ordenar por :
                    {'    '}
                    Nombre
                    {'    '}
                    <Dropdown
                        inline
                        options={sortOptions}
                        value={this.state.sort_name}
                        name="sort_name"
                        onChange={this.handleChange}
                    />
                    {'    '}
                    Precio
                    {'    '}
                    <Dropdown
                        inline
                        options={sortOptions}
                        value={this.state.sort_price}
                        name="sort_price"
                        onChange={this.handleChange}
                    />
                    {'    '}
                    Disponibilidad
                    {'    '}
                    <Dropdown
                        inline
                        options={sortOptions}
                        value={this.state.sort_available}
                        name="sort_available"
                        onChange={this.handleChange}
                    />
                    {'    '}
                    Cantidad
                    {'    '}
                    <Dropdown
                        inline
                        options={sortOptions}
                        value={this.state.sort_quantity}
                        name="sort_quantity"
                        onChange={this.handleChange}
                    />
                </span>
                <br/>
                <br/>
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
                                    <AddProductButton
                                        product={item}
                                    />
                                </Card.Content>
                            </Card>
                        )
                    })}
                </Card.Group>
            </React.Fragment>
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