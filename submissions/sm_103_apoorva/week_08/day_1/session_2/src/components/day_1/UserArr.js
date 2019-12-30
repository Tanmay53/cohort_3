import React from 'react'
import Name from './name'
import Location from './Location'
import Description from './Description'
import UserContact from './UserContact'
import Skills from './Skills'
class UserArr extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name : ["Ricky Park"],
            location : ["NEW YORK"],
            description : ["User Interface Designer and","Front-end Developer"],
            button : [["Message","btn btn-primary"],["Following","btn btn-outline-primary mx-4"]],
            skills : [["UI/UX","badge spanFoot"],["Front End Development","badge spanFoot mx-4"],["HTML","badge spanFoot mx-3"],["CSS","badge spanFoot"],["Javascript","badge spanFoot mx-4"],["React","badge spanFoot mx-3"],["Node","badge spanFoot mx-3"]]
        }
    }

    render()
    {
        return(
            <div>
                <div className="text">
                    <Name arr={this.state.name}/>
                    <Location arr={this.state.location}/>
                </div>
                <div className="text1">
                    <Description arr={this.state.description}/>
                </div>
                <UserContact arr={this.state.button}/>
                <Skills arr={this.state.skills}/>
            </div>
        )
    }
}

export default UserArr