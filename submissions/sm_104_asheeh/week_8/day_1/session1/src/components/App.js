import React, { Component } from 'react'
import List from "./List";
import Buttons from './Buttons';
import Card from "./Card"


function App (){
    return (
        <>
        <div>
            <List/>
        </div>
        <div>
            <Buttons />
        </div>
        <div>
            <Card />
        </div>

        </>
    )
}

export default App