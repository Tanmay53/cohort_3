import React from 'react'

export default class Mobile extends React.Component{
  render(){
    return(
      <div >
      <h1>Mobile Operating Systems</h1>
      <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
      </ul>

      <h1>Mobile Manufacturers</h1>
      <ul>
      <li>Samsung</li>
      <li>HTC</li>
      <li>Micromax</li>
      <li className="" style={{listStyleType:"circle"}} >Apple</li>

      </ul>
    </div>
    )
  }
}
