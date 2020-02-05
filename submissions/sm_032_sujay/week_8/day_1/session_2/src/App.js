import React, { Component } from 'react';

import Mobile from './components/Mobile/Mobile'

import Button from './components/Button/Button'

import Card from "./components/Card/Card"

class App extends Component {

  constructor(props)
  {
    super(props)
    this.state={

      h : ["Mobile Operating Systems","Mobile manufacturers"],
      arrOs:['Android',"Windows","Iphone","Blackberry"],
    
      arrMm : ["Samsung", "HTC","Micromax","Apple"],

      arrButton : [ {label:'JOIN US',color:'info'},{label:'LOGIN',color:'dark'},
      {label:'SEARCH',color:'warning'}, {label:'HOME',color:'light'}, 
      {label:'SETTINGS',color:'success'},{label:'CONTACT',color:'danger'},
      {label:'HELP',color:'secondary'},{label:'DOWNLOAD',color:'primary'} ],

      card:[
        {
          name:"Sujay Nagaraj",
          location:"Bengaluru",
          description:"Front-end Developer ",
          skills : ["Bootstrap","Javascript","ECMA6","ReactJS","VueJS","AngularJS"]
        }
      ]
      
    }
  }


  render() {
    console.log(this.state.arrOs)
    return (
      <div>

        <Mobile h={this.state.h[0]}/>
        {this.state.arrOs.map(ele=> <Mobile ele={ele} key={ele}/>)}
        <Mobile h={this.state.h[1]}/>
        {this.state.arrMm.map(ele => <Mobile ele={ele} key={ele}/>)}

        {/* {this.state.arrButton.map(ele => <Button ele={ele} key={ele}/>)} */}

        <div className="container row ">
        <Button item={this.state.arrButton[0].label} deco={this.state.arrButton[0].color}/>
        <Button item={this.state.arrButton[1].label} deco={this.state.arrButton[1].color}/>
        </div>
       
        <div className="container row ">
        <Button item={this.state.arrButton[2].label} deco={this.state.arrButton[2].color}/>
        <Button item={this.state.arrButton[3].label} deco={this.state.arrButton[3].color}/>
        </div>

        <div className="container row ">
        <Button item={this.state.arrButton[4].label} deco={this.state.arrButton[4].color}/>
        <Button item={this.state.arrButton[5].label} deco={this.state.arrButton[5].color}/>
        </div>

        <div className="container row ">
        <Button item={this.state.arrButton[6].label} deco={this.state.arrButton[6].color}/>
        <Button item={this.state.arrButton[7].label} deco={this.state.arrButton[7].color}/>
        </div>

        <Card page={this.state.card}/>
      

      </div>
    );
  }
}

export default App;
