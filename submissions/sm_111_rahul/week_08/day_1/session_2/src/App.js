import React from 'react';
import MobileMan from './mobileMan.js';
import MobileOps from './mobileOps.js';
import Button from './button.js';
import Card from './card.js';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          mobileOps : ['Android', 'Blackberry', 'iPhone', 'Windows Phone'],
          mobile : ['Samsung', 'HTC', 'Micromax', 'Apple']
        };
        
    }
    render(){
        return (
         <div>   
            <div id='cont'>
              <h1>Mobile Operating System</h1>
              <ul><MobileOps list1 = {this.state.mobileOps} /> </ul> 
              <h2>Mobile Manufactures</h2>
              <ul><MobileMan list2 = {this.state.mobile} /> </ul> 
            </div> 
            <div id="cont">
                <div>
                  <Button color="#127FC3" label ="JOIN US"/>
                  <Button color="#69969D" label ="SETTINGS"/>
                </div>
                <div>
                  <Button color="#F69020" label ="LOGIN"/>
                  <Button color="#791818" label ="CONTACT US"/>
                </div>
                <div>
                  <Button color="#7CAD3C" label ="SEARCH"/>
                  <Button color="#6261A3" label ="HELP"/>
                </div>
                <div>
                  <Button color="#DC4383" label ="HOME"/>
                  <Button color="#77632E" label ="DOWNLOAD"/>
                </div>
            </div>  
            <div>
              <Card />
            </div>
        </div>
        );
    }
}

export default App