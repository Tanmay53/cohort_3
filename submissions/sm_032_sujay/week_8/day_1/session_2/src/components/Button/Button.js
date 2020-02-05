import React from 'react'

export default class Button extends React.Component{

    constructor(props){
        super(props)

    }





    render(){

        return(
            <div>
                
              <button className="btn">{this.props.item}</button>

            </div>
        )
    }
}