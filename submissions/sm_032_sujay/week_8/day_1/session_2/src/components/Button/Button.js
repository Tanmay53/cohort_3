import React from 'react'

export default class Button extends React.Component{

    constructor(props){
        super(props)

        deco:this.props.deco
        item: this.props.item
    }



    render(){

        return(
            <div>
             {/* <button  className="btn btn-lg m-2 bg-${this.props.deco}">{this.props.item}</button> */}
             <button className = {" ml-3 mt-3 btn btn-lg btn-" +`${this.props.deco}`}>{this.props.item}</button>
            </div>
        )
    }
}