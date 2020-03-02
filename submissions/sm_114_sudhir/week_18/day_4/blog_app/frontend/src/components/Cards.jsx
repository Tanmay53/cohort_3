import React, { Component } from 'react'

export default class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log(this.props.blog)
        // {this.props.blogs.map(blog => {
            return (
                <div className="col-lg-3 col-sm-6">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">{this.props.blog.title}</div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.blog.updated_at}</h5>
                            <p className="card-text text-white">{this.props.blog.content}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-light rounded">Read More</button>
                        </div>
                    </div>
                </div>
            )
        }
}
