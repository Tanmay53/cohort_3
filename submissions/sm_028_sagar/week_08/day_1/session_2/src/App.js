import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Components/Buttons.js'
import './App.css'
import Card from './Components/Card.js'

class StaticCard extends React.Component{
  constructor(props){
    super(props);
    this.section1={
      heading:'Mobile Operating System',
      type:['Android','Blackberry','iPhone','Windows phone']
    }
    this.section2={
      heading:'Mobile Manufacturers',
      type:['Samsung','HTC','Micromax','Apple']
    }
  }

  render(){
    return(
          <div className='template'>
            <h1>{this.section1.heading}</h1>
            <ul>{this.section1.type.map(ele=>(<li>{ele}</li>))}</ul>
            <h1>{this.section2.heading}</h1>
            <ul>{this.section2.type.map(ele=>(<li>{ele}</li>))}</ul>
            <div className='btnGrid'>
              <Button label = 'JOIN US' color = 'Blue' />
              <Button label = 'SETTINGS' color = 'rgb(43, 150, 199)'/>
            </div>
            <div className='btnGrid'>
              <Button label = 'LOGIN' color = 'Orange' />
              <Button label = 'CONTACT US' color = 'Red'/>
            </div>
            <div className='btnGrid'>
              <Button label = 'SEARCH' color = 'green' />
              <Button label = 'HELP' color = 'purple'/>
            </div>
            <div className='btnGrid'>
              <Button label = 'HOME' color = 'pink' />
              <Button label = 'DOWNLOAD' color = 'brown'/>
            </div>
          </div>
    )
  }
}

let object = {
  name:'Ricky Park',
  location:'NEW YORK',
  description:'User interface designer and front-end developer',
  skills:['UI/UX','Front End Development','HTML','CSS','JavaScript','React','Node']
}
let element = (
    <div>
        <StaticCard />
        <Card key={object} data ={object} />
    </div>
)

export default element;