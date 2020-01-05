import React from 'react';
import Img from './imageSec';
import ButtonCreate from './btnCreate';
import Skill from './skills'


class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            name : 'Ricky Park',
            location : 'NEW YORK',
            description : 'User interface Designer and front-end developer',
            btn : [['Message','#2BBFCB'], ['Following','#231E39']],
            skills : ['UI/UX', 'Front-End-Developer', 'HTML', 'CSS', 'JvaScript', 'React', 'Node']
        }
    }

    render(){
        return (
            <div>
                <h2 className="text">{this.state.name}</h2>
                <p className="text">{this.state.location}</p>
                <p className="text">{this.state.description}</p>
                <ButtonCreate ele = {this.state.btn}/>
                <h6>Skills</h6>
                <Skill ele = {this.state.skills}/>
            </div>
        )
    }
}
function Mob(){
    return (
        <div id='proMainCont'>
            <div id="profileSubCont">
                <Img />
                <Profile />
            </div>
        </div>
    )
}

export default Mob;