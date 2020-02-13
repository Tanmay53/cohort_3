import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import app_store from './redux/store';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render();

app_store.subscribe(render);
