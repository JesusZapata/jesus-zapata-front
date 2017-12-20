import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form,
    Radio,
    Header,
    Dropdown } from 'semantic-ui-react'

import { mainSearchChange } from '../../../actions/MainSearchActions';

import './MainSearch.css';

class MainSearch extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            MainSearch: props.MainSearch
        };
    }

    handleChange = (event, {name, value, checked}) => {
        value = checked ? checked : value;
        this.setState((prevState) => {
            prevState.MainSearch[name] = value;
            this.props.mainSearchChange(prevState.MainSearch);
            return prevState;
        });
    }

    render () {
        return(
            <Form size="tiny">
                <Header as='h5'>Nombre</Header>
                <Form.Input
                    icon='search'
                    name="search"
                    fluid
                    value={this.state.MainSearch.search || ''}
                    onChange={this.handleChange}
                    placeholder='Nombre producto'
                />
                <Header as='h5'>Disponibilidad</Header>
                <Radio
                    name="availability"
                    toggle
                    checked={!!this.state.MainSearch.availability}
                    onChange={this.handleChange}
                />
                <Header as='h5'>Rango de precios</Header>
                <Form.Group grouped size="mini">
                    <Form.Input
                        name="price_since"
                        label="Desde"
                        placeholder='Desde'
                        type='number'
                        step='any'
                        value={this.state.MainSearch.price_since || ''}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        name="price_until"
                        label="Hasta"
                        placeholder='Hasta'
                        type='number'
                        step='any'
                        value={this.state.MainSearch.price_until || ''}
                        onChange={this.handleChange}
                    />
                </Form.Group>
            </Form>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    MainSearch: state.mainSearchReducers
});

const mapDispatchToProps = (dispatch) => {
    return {
        mainSearchChange: (MainSearch) => {
            dispatch(mainSearchChange(MainSearch));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch)