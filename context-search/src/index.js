import React from 'react';
import ReactDOM from 'react-dom';

import Provider from './Provider';
import Consumer from './Consumer';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <Provider>
        <Consumer>
            <App />
        </Consumer>
    </Provider>,
    document.getElementById('root')
);
