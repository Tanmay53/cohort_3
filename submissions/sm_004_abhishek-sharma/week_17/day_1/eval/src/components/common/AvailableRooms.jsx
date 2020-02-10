import React, { Component } from 'react'

import RoomData from './RoomData'
import IndividualRoom from './IndivudualRoom'

export default class AvailableRooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection : RoomData
        }
    }
    
    render() {
        const {collection} = this.state
        console.log(collection)
        return (
            <div className =  "container my-5">
            <div className = "row ml-1">
                <h1 className = "font-text-bold">{title.toUpperCase()}</h1>
            </div>
            <div className = "row">
                {items
                    .map(({id, ...otherItemProps }) =>(
                    <IndividualRoom key = {id} {...otherItemProps} />
                ))}
            </div>
        </div>
        )
    }
}
