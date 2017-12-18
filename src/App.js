import React from 'react';
//import { Provider } from 'react-redux';

import './App.css';
import HeaderContainer from './components/HeaderContainer';

class App extends React.Component {

    render() {
        return (
            <div>
                <HeaderContainer />
                <h1>
                    Contenido adicional
                </h1>
            </div>
        );
    }
    
}

export default App;
