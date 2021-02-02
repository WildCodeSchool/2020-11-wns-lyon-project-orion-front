import Initializer from './Initializer';
import store from './core/store/store';
import {Provider} from 'react-redux';
import './assets/styles/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Initializer>
                <App/>
            </Initializer>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
