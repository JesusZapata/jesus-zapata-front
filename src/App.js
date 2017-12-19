import React from 'react';
//import { Provider } from 'react-redux';

import './App.css';
import HeaderContainer from './components/HeaderContainer';
import BodyContainer from './components/BodyContainer';

class App extends React.Component {

    render() {
        return (
            <div>
                <HeaderContainer />
                <BodyContainer />
                <h1>
                    Contenido adicional
                </h1>
            </div>
        );
    }
    
}

export default App;
