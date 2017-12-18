import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

//let store = createStore(todoApp)

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
