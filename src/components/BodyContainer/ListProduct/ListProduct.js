import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card,
    Label,
    Button,
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

        let sortOptions = [
            {text: ' - ', value: '-'},
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
                        compact
                        inline
                        options={sortOptions}
                        defaultValue={'-'}
                    />
                    {'    '}
                    Precio
                    {'    '}
                    <Dropdown
                        inline
                        options={sortOptions}
                        defaultValue={'-'}
                    />
                    {'    '}
                    Disponibilidad
                    {'    '}
                    <Dropdown
                        inline
                        options={sortOptions}
                        defaultValue={'-'}
                    />
                    {'    '}
                    Cantidad
                    {'    '}
                    <Dropdown
                        inline
                        options={sortOptions}
                        defaultValue={'-'}
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
                                    <Button as='div' labelPosition='right'>
                                        <Button icon>
                                            <Icon name='heart'/>
                                        </Button>
                                        <Label as='a' basic pointing='left'>{item.like}</Label>
                                    </Button>
                                    
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