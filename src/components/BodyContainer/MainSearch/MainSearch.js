import React, { Component } from 'react';

import { Form,
    Segment,
    Header } from 'semantic-ui-react'

import './MainSearch.css';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

class MainSearch extends Component {
    
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render () {
        const { value } = this.state

        return(
            <Segment>
                <Header as='h3'>Buscador</Header>
                <Form size="tiny">
                    <Form.Group widths='equal'>
                        <Form.Input label='First name' placeholder='First name' />
                        <Form.Input label='Last name' placeholder='Last name' />
                        <Form.Select label='Gender' options={options} placeholder='Gender' />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Size</label>
                        <Form.Radio label='Small' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
                        <Form.Radio label='Medium' value='md' checked={value === 'md'} onChange={this.handleChange} />
                        <Form.Radio label='Large' value='lg' checked={value === 'lg'} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Form.Button secondary>Submit</Form.Button>
                </Form>
            </Segment>
        );
    }

}

export default MainSearch;