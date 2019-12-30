import React from 'react'
import List from './List'

class Mobile extends React.Component
{
    constructor(props){
        super(props);
        this.state={
        arr1 : ["Android","Blackberry","iPhone","Windows Phone"],
        arr2 : ["Samsung","HTC","Micromax","Apple"]
        }
    };
    
    render()
    {
        return(
            <div>
                <h1>Mobile Operating System</h1>
                <List arr={this.state.arr1}/>
                <h1>Mobile Manufacturers</h1>
                <List arr={this.state.arr2}/>
            </div>
        )
    }
   
}

export default Mobile