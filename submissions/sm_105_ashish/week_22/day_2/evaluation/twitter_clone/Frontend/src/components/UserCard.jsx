import React, { Component } from 'react'

export default class UserCard extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" style={{width:"100p%",height:"200px"}} src={this.props.data.imgurl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{this.props.data.name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <button href="#" className="btn btn-primary justify-content-center">Follow</button>
                </div>
            </div>
        )
    }
}
