import React from 'react'
import  './buttons.css'

class Button extends React.Component{
    constructor(props){
        super(props)
        this.label = props.label;
        this.color = props.color;
    }

    render(){
        return(
            <div>
               <button className='btn' style={{backgroundColor:this.color}}>{this.label}</button>
            </div>
        )
    }
}

export default Button