import React, { Component } from 'react'
import Button from './Button'

export default class Buttons extends Component {
    constructor(props){
        super(props)

        this.state={
            arr1 : [["JOIN US", "btnJoinUs btnClass"], ["LOGIN", "btn-warning btnClass"],["SEARCH", "btn-success btnClass"],["HOME", "btnHome btnClass"]],
            arr2 : [["SETTINGS", "btn-info btnClass"],["CONTACT US", "btn-danger btnClass"],["HELP", "btnHelp btnClass"],["DOWNLOAD", "btnDownload btnClass"]]
        }
    }
    render() {
        return (
            <div className="container">
              <div className="row">
                 <div className="col-4 m-2 p-1">
                   {this.state.arr1.map(ele => {
                       return (
                        
                               <Button label={ele[0]} color = {ele[1]}/>
                
                       )
                   } )}
                 </div>
                <div className="col-4 m-2 p-1">
                {this.state.arr2.map(ele => {
                    return (
                        
                            <Button label={ele[0]} color = {ele[1]}/>
                
                    )
                } )}
                </div>
              
            </div>
            <br />
        </div>
        )
    }
}


