import React, { Component } from 'react'

class Mobile extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
                <ul>
                    {this.props.arr.map((ele,i) =>{
                        return(
                        (i<3)?(<li>{ele}</li>):"")
                    })}
                </ul>
        )
        
    }
}

export default Mobile