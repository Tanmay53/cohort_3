import React from 'react';
import './index.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             name: 'Ricky Park',
             location: 'NEW YORK',
             desc: 'User interface designer and front-end developer',
             skills: ['UI/UX', 
             'Front-End Development',
             'HTML',
             'CSS',
             'JavaScript',
             'React',
             'Node'],
        };
    }

    listSkill =(arr) => {
    return (

        arr.map((e) => {
            console.log(e)
            return <span>{e}</span>
            
        })
    )
    }

    render(){
        return (
          <div id="wrapper">
            <div id="card">
              <button id="pro">PRO</button>
              <span>
                <img src="/girl.jpg" height="200px" width="200px"></img>
              </span>
              <h1 id="ricky">{this.state.name}</h1>
              <h3>{this.state.location}</h3>
              <p>{this.state.desc}</p>
              <div>
                <span id="btn1">Message</span>
                <span id="btn2">Following</span>
              </div>
              <div id="footer">
                <h3 id="skil">SKILLS</h3>
                {this.listSkill(this.state.skills)}
              </div>
            </div>
          </div>
        );
    
}
}

export default Card