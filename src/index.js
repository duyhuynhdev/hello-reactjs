import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// this one used for reloading content in app.js without auto refresh page after save
if(module.hot){
    module.hot.accept();
}
registerServiceWorker();
