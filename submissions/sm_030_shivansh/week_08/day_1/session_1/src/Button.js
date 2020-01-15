import React from 'react';
import './Button.css'

class Button extends React.Component {
    render() {
        return (
            <div id="main">
                <div>
                    <button className="btn btn-secondary m-3 rounded-pill">JOIN US</button>
                    <button className="btn btn-primary m-3 rounded-pill">SETTINGS</button>
                </div>
                <div>
                    <button className="btn btn-warning m-3 rounded-pill">LOGIN</button>
                    <button className="btn btn-danger m-3 rounded-pill">CONTACT US</button>
                </div>
                <div>
                    <button className="btn btn-info m-3 rounded-pill">SEARCH</button>
                    <button className="btn btn-success m-3 rounded-pill">HELP</button>
                </div>
                <div>
                    <button className="btn btn-light m-3 rounded-pill">HOME</button>
                    <button className="btn btn-dark m-3 rounded-pill">DOWNLOAD</button>
                </div>
            </div>
        )
    }
}

export default Button;