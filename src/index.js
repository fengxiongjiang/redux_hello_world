import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider> 
        <App />
    </Provider>, document.getElementById('root'))
registerServiceWorker();
