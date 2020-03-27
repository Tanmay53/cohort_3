import React from 'react';
export default class Tweet extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <>
            <div className="d-flex col bg-light border">
                <div className="col-2">
                <img className="mt-3 rounded-circle" height="60px" width="60px" src={this.props.url} alt=""/>
                </div>
                   <div className="col-10 ml-1">
        <p className="mt-2 p-1 font-weight-bold">{this.props.username}</p><br/>
        <p className="p-2 ">{this.props.tweet}</p>
        <p></p>
                   </div>
            </div>
            </>
        )
    }
}