import React from 'react';
import OsList from './Os.js';
import MobileList from './Mobile.js';
import Button from './Button.js';
import './Button.css';
import Card from './Card.js'
import './Card.css';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            os:['Android','Blackberry','iPhone','Windows Phone'],
            mobile:['Samsung','HTC','Micromax','Apple'],
            label:['JOIN US','SETTINGS','LOGIN','CONTACT US','SEARCH','HELP','HOME','DOWNLOAD'],
            color:['blue','slategray','orange','red','green','purple','palevioletred','brown'],
            data:['N V CHAITANYA','BANLGORE','User Interface designer and front-end developer',['UI/UX','Front End Development','HTML','CSS','JavaScript','React','Node']]
        }
    }

    render(){
        return(
            <div>
                <OsList data1={this.state.os}/>
                <MobileList data2={this.state.mobile}/>
                <Button labdata={this.state.label} colordata={this.state.color}/>
                <Card cdata={this.state.data}/>
            </div>
        )
    }
}
export default App