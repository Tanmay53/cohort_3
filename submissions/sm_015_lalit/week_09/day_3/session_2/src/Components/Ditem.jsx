import React from 'react'
export default class Ditem extends React.Component{
    render(props){
        return(
            <div className="row">
                <p className="ml-2 mr-4">{this.props.icon}</p>
                <p>{this.props.label}</p>
            </div>
        )
    }
}