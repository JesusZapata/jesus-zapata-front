import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(
    reducers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
