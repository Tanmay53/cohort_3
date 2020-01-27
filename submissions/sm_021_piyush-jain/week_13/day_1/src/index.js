import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link, BrowserRouter } from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import Routes from './components/Routes'
import { Provider } from 'react-redux'
import store from './components/store'
import './App.css';
function App() {
    return (
        <>
            <div className="App">
                <Link to="/">Home</Link>
            </div>
            <Routes />
        </>
    );
}
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <React.Fragment>
                    <App />
                </React.Fragment>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
