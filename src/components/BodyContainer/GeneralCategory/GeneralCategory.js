import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Label,
    Header,
    Menu } from 'semantic-ui-react'

import { filterCategory,
    selectCategory } from '../../../actions/CategoryActions';

import './GeneralCategory.css';

class GeneralCategory extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            Category: props.Category
        };
    }
    
    handleItemClick = (e, {value}) => {
        this.setState((prevState, props) => {
            prevState.Category.active = value;
            this.props.select(prevState);
            return prevState;
        });
    }
        
    render() {
        return (
            <React.Fragment>
                <Header as='h5'>Categorias</Header>
                <Menu pointing vertical fluid={true}>
                    <Menu.Item
                        key={0}
                        value={0}
                        active={this.state.Category.active === 0}
                        onClick={this.handleItemClick}
                    >
                        Todos
                    </Menu.Item>
                    {this.state.Category.categories.map((item, i) => {
                        return (
                            <Menu.Item
                                key={item.id}
                                value={item.id}
                                name={item.name}
                                active={this.state.Category.active === item.id}
                                onClick={this.handleItemClick}
                            >
                                {item.name}
                                <Label>{item.sublevels.length}</Label>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    Category: state.categoryReducers
});

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (Category) => {
            dispatch(filterCategory(Category));
        },
        select: (Category) => {
            dispatch(selectCategory(Category));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralCategory)