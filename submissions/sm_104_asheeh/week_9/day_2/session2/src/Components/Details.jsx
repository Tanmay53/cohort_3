import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props) {
        super(props)
    
    }
    
    render() {
        console.log(this.props)
        return (
            // <div key={ele.id}>
            //     <p>{ele.name} </p>
            //     <p>{ele.salary} </p>
            //     <p>{ele.skills} </p>
            // </div>
            <div>Hello</div>
        )
    }
}
