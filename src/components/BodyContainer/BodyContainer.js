import React, { Component } from 'react';

import { Container,
    Grid,
    Segment } from 'semantic-ui-react'

import GeneralCategory from './GeneralCategory';
import ListProduct from './ListProduct';
import MainSearch from './MainSearch';

import './BodyContainer.css';

class BodyContainer extends Component {
    
    render() {
        return (
            <Container>
                <Grid columns='equal'>
                  <Grid.Column>
                    <Segment piled={true} color="blue">
                        <MainSearch/>
                        <GeneralCategory/>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <ListProduct/>
                  </Grid.Column>
                </Grid>
            </Container>
        );
    }

}

export default BodyContainer;