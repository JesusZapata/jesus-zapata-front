import React, { Component } from 'react';

import { Breadcrumb } from 'semantic-ui-react'

import './BreadCrumb.css';

const sections = [
    { key: 'Home', content: 'Home', link: true },
    { key: 'Store', content: 'Store', link: true },
    { key: 'Shirt', content: 'T-Shirt', active: true },
];

class BreadCrumb extends Component {

    render () {
        return(
            <Breadcrumb size='large' icon='right angle' sections={sections} />
        );
    }

}

export default BreadCrumb;