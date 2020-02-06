import React from 'react';
import OsList from './Os.js';
import MobileList from './Mobile.js';
import Buttons from './Buttons.js';
import './Buttons.css';
import Card from './Card.js';

class App extends React.Component{
    render(){
        return(
            <div>
                <OsList />
                <MobileList />
                <Buttons />
                <Card />
            </div>
        )
    }
}
export default App