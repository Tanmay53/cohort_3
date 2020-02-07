import React from 'react';
import Os from './Os';
import Card from './Card';
import './Card.css';
import Button from './Button';
import './Button.css';

class App extends React.Component{
    constructor(props){
      super(props)
      
      this.state = {     
        mobileOs :["Android","Blackberry","WindowsPhone","iPhone"],
        mobileManf :["Samsung","HTC","Micromax","Apple"],
        label : ["JOIN US","SETTINGS","LOGIN","CONTACT US","SEARCH","HELP","HOME","DOWNLOAD"],
        // colour : ["blue","lightblue","orange","brown","green","purple","pink","gold"],
        colour : ["rgb(23, 150, 223)","rgb(146, 199, 231)","darkorange","rgb(223, 83, 83)","lawngreen","rgb(95, 95, 165)","violet","goldenrod"],
        name : "gangireddy",
        location : "Banglore",
        description : "UserInterface designer and front-end developer",
        skills : ["UI/UX","Front End Developement","HTML","CSS","JavaScript","React","Node"],

      }
    }
    render(){
        return (
            <div>
                <Os data1= {this.state.mobileOs} data2 ={this.state.mobileManf} />
                <br></br>
                <br></br>
                <Button butt1={this.state.label} butt2={this.state.colour} />
                <br></br>
                <br></br>
                <Card info1= {this.state.name} info2 = {this.state.location} info3={this.state.description} info4={this.state.skills}/>
                
            </div>
        );
    };
};
export default App;