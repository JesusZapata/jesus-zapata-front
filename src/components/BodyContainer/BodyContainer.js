import React, { Component } from 'react';

import { Container,
    Grid,
    Divider } from 'semantic-ui-react'

import GeneralCategory from './GeneralCategory';
import ListProduct from './ListProduct';
import BreadCrumb from './BreadCrumb';
import MainSearch from './MainSearch';

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
                    <BreadCrumb/>
                    <Divider/>
                    <MainSearch/>
                    <Divider/>
                    <ListProduct/>
                  </Grid.Column>
                </Grid>
            </Container>
        );
    }

}

export default BodyContainer;