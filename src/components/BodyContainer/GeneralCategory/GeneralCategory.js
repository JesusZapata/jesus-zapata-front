import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header,
    List } from 'semantic-ui-react'

import { selectCategory } from '../../../actions/CategoryActions';

import './GeneralCategory.css';

class GeneralCategory extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            Category: props.Category
        };
    }

    handleItemClick = (value) => {
        this.setState((prevState, props) => {
            prevState.Category.active = value;
            this.props.selectCategory(prevState.Category);
            return prevState;
        });
    }

    getTreeCategory = (categories) => {
        return (categories.map((item, i) => {
            return (
                <List.Item key={i}>
                    <List.Icon name='angle right' />
                    <List.Content>
                        <List.Header
                            as='a'
                            key={item.id}
                            onClick={() => this.handleItemClick(item.id)}
                        >
                            {item.name}
                        </List.Header>
                        {('sublevels' in item  && item.sublevels.length > 0) ?
                            <List.List>
                                {this.getTreeCategory(item.sublevels)}
                            </List.List>:
                            <React.Fragment/>
                        }
                    </List.Content>
                </List.Item>
            );
        }));
    }
        
    render() {
        return (
            <React.Fragment>
                <Header as='h5'>Categorias</Header>
                <List>
                    <List.Item>
                        <List.Icon name='angle right' />
                        <List.Content>
                            <List.Header
                                as='a'
                                onClick={() => this.handleItemClick(0)}
                            >
                                Todos
                            </List.Header>
                            <List.List>
                                {this.getTreeCategory(this.props.Category.categories)}
                            </List.List>
                        </List.Content>
                    </List.Item>
                </List>
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    Category: state.categoryReducers
});

const mapDispatchToProps = (dispatch) => {
    return {
        selectCategory: (Category) => {
            dispatch(selectCategory(Category));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralCategory)