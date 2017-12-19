import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input,
    Dropdown,
    Menu } from 'semantic-ui-react'

import { filterCategory } from '../../../actions/CategoryActions';

import './GeneralCategory.css';

class GeneralCategory extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            activeItem: '',
            Category: props.Category,
        };
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
        
    handleFilterChange = (event, {value}) => {
        this.setState((prevState, props) => {
            prevState.Category.filter = value;
            this.props.filter(prevState);
            return prevState;
        });
    }

    render() {
        return (
            <Menu pointing vertical fluid={true}>
                <Menu.Item>
                    <Input
                        icon='search'
                        placeholder='Buscar categoria'
                        onChange={this.handleFilterChange}
                        value={this.state.Category.filter}
                        name="filter"
                    />
                </Menu.Item>
                {this.state.Category.categories.map((item, i) => {
                    return (
                        <React.Fragment key={i}>
                            {'sublevels' in item && item.sublevels.length
                                ?
                                <Dropdown
                                    item
                                    key={item.id}
                                    text={item.name}
                                    pointing='left'
                                >
                                    <Dropdown.Menu>
                                        {item.sublevels.map(sublevels => {
                                            return (
                                                <Dropdown.Item
                                                    key={sublevels.id}
                                                    name={sublevels.name}
                                                >
                                                    {sublevels.name}
                                                </Dropdown.Item>
                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                                :
                                <Menu.Item
                                    key={item.id}
                                    name={item.name}
                                    active={this.state.activeItem === item.name}
                                    onClick={this.handleItemClick}
                                >
                                    {item.name}
                                </Menu.Item>
                            }
                        </React.Fragment>
                    )
                })}
            </Menu>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralCategory)