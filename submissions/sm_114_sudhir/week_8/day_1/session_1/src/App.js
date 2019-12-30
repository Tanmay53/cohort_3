import React from 'react';
import ButtonCreate from './buttonCreate';


class Mobile extends React.Component{
  constructor(){
    super()
    this.state = {
      operrating : ['Android', 'Blackberry', 'iPhone', 'Windows Phone'],
      manufacturers : ['Samsung', 'HTC', 'Micromax', 'Apple']
    }
  }

  render(){
    return (
      <div>
        <h1>Mobile Operating System</h1>
        <List val={this.state.operrating}/>
        <h1>Mobile Manufacturers</h1>
        <List val={this.state.manufacturers}/>
      </div>
    )
  }
}

class List extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      liList : this.props.val
    }
  }

  render(){
    return (
      <ul>
          {this.state.liList.map(val => <li>{val}</li>)}
      </ul>
    )
  }
}
class Button extends React.Component{
  constructor(){
    super()
    this.state = {
      btnCololr : [['JOIN US','blue'], ['SETTING','lightblue'], ['LOGIN','yellow'], ['CONTACT US','red'],['SEARCH','GREEN'], ['HELP','grey'], ['HOME','pink'], ['DOWNLOAD','brown']]
    }
  }

  render(){
    return (
      <div>
        <ButtonCreate ele={this.state.btnCololr}/>
      </div>
    )
  }
}





function App(){
  return (
    <div>
      <Mobile/>
      <Button/>
    </div>
  )
}

export default App;