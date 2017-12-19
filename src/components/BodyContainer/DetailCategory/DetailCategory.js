import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List } from 'semantic-ui-react'

import './DetailCategory.css';

class DetailCategory extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            Category: props.Category
        };
    }
    
    render() {
        return (
            <React.Fragment>
                <List size="small">
                    <List.Item>
                        <List.Icon name='folder' />
                        <List.Content>
                            <List.Header>Bebidas</List.Header>
                            <List.List>
                                <List.Item>
                                    <List.Icon name='folder' />
                                    <List.Content>
                                        <List.Header>components</List.Header>
                                    </List.Content>
                                </List.Item>
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

export default connect(mapStateToProps)(DetailCategory)