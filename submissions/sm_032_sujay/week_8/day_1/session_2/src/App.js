import React, { Component } from 'react';

import Mobile from './components/Mobile/Mobile'

import Button from './components/Button/Button'


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
      {label:'HELP',color:'secondary'},{label:'DOWNLOAD',color:'primary'},]

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

        <Button item={this.state.arrButton[0].label}/>
        <Button item={this.state.arrButton[1].label}/>
        <Button item={this.state.arrButton[2].label}/>
        <Button item={this.state.arrButton[3].label}/>
        <Button item={this.state.arrButton[4].label}/>
        <Button item={this.state.arrButton[5].label}/>
        <Button item={this.state.arrButton[6].label}/>
        <Button item={this.state.arrButton[7].label}/>
      

      </div>
    );
  }
}

export default App;
