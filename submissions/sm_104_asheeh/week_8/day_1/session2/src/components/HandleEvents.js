import React, { Component } from 'react'

// class SimpleComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             printValue : "clicked"
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         console.log(this.state.printValue);
//     }
//     render(){
//         return(
//             <button onClick = {this.handleClick}>Click here to print to the console</button>
//         );
//     }
// }

class SimpleList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            printValue : "clicked"
        }
    }
    handleClick = () => {
        console.log(this.state.printValue);
    }
    render(){
        return (
            <button onClick = {this.handleClick}>Click here to print to the console</button>
        )
    }
}

export default SimpleComponent