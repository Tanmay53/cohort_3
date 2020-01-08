import React, { Component } from 'react'

export default class Course extends Component {
    render() {
        if(this.props.name === "fullstack"){
            return(
                <React.Fragment>
                    <h1> FullStack Development </h1>
                    <h3> What you will learn: </h3>
                    <ul>
                        <li> HTML </li>
                        <li> CSS  </li>
                        <li> JavaScript </li>
                    </ul>
                </React.Fragment>
            );
        }
        if(this.props.name === "android"){
            return(
                <React.Fragment>
                    <h1> Android Development </h1>
                    <h3> What you will learn: </h3>
                    <ul>
                        <li> Java </li>
                        <li> Kotlin </li>
                        <li> Android Studio </li>
                    </ul>
                </React.Fragment>
            );
        }
    }
}
