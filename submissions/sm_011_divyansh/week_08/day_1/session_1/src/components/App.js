import React from 'react';
import Os from "./os"
import Mobile from './mobile'
import Btn from './button.js'
import Card from './card.js'

function App() {
    return (
        <div>
        <h1>Mobile Operating System</h1>
        <Os />
        <h1>Mobile Manufacturers</h1>
        <Mobile/>
        <Btn/>
        <Card/>
       

        </div>);
}

export default App
