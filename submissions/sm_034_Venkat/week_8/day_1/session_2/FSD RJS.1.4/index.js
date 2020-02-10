import React from 'react';
import ReactDOM from 'react-dom';

class Mobile extends React.Component {
    constructor (props) {
        super(props)
        this.state= {
            os : ["Android", "Windows Phone", "iPhone", "Blackberry"],
            name : ["Nokia", "Apple", "htc", "Samsung"],
        }
    }
    render() {
        return (
            <div>
                <h1>Mobile Operating System</h1>
                <ul>
                    <li>{this.state.os[0]}</li>
                    <li>{this.state.os[1]}</li>
                    <li>{this.state.os[2]}</li>
                    <li>{this.state.os[3]}</li>
                </ul>
                <h1>Mobile Manufacturers</h1>
                <ul>
                    <li>{this.state.name[0]}</li>
                    <li>{this.state.name[1]}</li>
                    <li>{this.state.name[2]}</li>
                    <li>{this.state.name[3]}</li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<Mobile/>, document.querySelector("#root"))