import React, { Component } from 'react';

import { Container,
    Grid } from 'semantic-ui-react'

import GeneralCategory from './GeneralCategory';
import ListProduct from './ListProduct';

import './BodyContainer.css';

class BodyContainer extends Component {
    
    render() {
        return (
            <Container>
                <Grid columns='equal'>
                  <Grid.Column>
                    <GeneralCategory/>
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