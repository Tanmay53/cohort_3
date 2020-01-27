import React, { Component } from 'react'

export default class Userpage extends Component {
    render() {
        return (
            <>
                <div className="m-auto">
                    You are logged in
                    <div className="m-auto">
                        <button className="btn btn-danger" onClick={this.props.func}>Singout</button>
                    </div>
                </div> 
            </>
        )
    }
}
