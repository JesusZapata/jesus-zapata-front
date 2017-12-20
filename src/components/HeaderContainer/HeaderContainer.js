import React, { Component } from 'react';

import { Container,
    Header,
    Segment,
    Menu ,
    Image } from 'semantic-ui-react'

import logo from '../../assets/images/logo.svg';

import RegisterButton from './Buttons/RegisterButton';
import UserButton from './Buttons/UserButton';
import CartButton from './Buttons/CartButton';

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
                        <Menu pointing secondary size='small'>
                            <Menu.Item as='a' active>
                                <Image src={logo} size='small' wrapped />
                            </Menu.Item>
                            <Menu.Item position='right'>
                                <RegisterButton/>
                                <UserButton/>
                                <CartButton/>
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>
            </Header>
        );
    }

}

export default HeaderContainer;
