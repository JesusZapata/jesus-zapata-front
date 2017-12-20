import React, { Component } from 'react';

import { Container,
    Header,
    Segment,
    Menu ,
    Button,
    Icon,
    Image } from 'semantic-ui-react'

import logo from '../../assets/images/logo.svg';

import RegisterButton from './Buttons/RegisterButton';
import UserButton from './Buttons/UserButton';

import './HeaderContainer.css';

class HeaderContainer extends Component {
    
    render() {
        return (
            <Header>
                <Segment
                    textAlign='center'
                    style={{ padding: '1em 0em' }}
                    vertical
                >
                    <Container>
                        <Menu pointing secondary size='large'>
                            <Menu.Item as='a' active>
                                <Image src={logo} size='small' wrapped />
                            </Menu.Item>
                            <Menu.Item position='right'>
                                <RegisterButton/>
                                <UserButton/>
                                <Button as='a' animated='vertical' basic style={{ marginLeft: '0.5em' }}>
                                    <Button.Content visible>
                                        <Icon name='cart'/>
                                    </Button.Content>
                                    <Button.Content hidden>
                                        24
                                    </Button.Content>
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>
            </Header>
        );
    }

}

export default HeaderContainer;
