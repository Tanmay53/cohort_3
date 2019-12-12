import React from 'react';
import './App.css';
import OSList from './components/oslist.js';
import Button from './components/buttons.js';
import Card from './components/card.js';

const App = () => {
    return (
        <div className = "App">
            <OSList />
            <Button />
            <Card />
        </div>
    );
};

export default App;