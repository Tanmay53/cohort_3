import React from 'react';
import './button.css';

const Button = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <button className="blue col-sm col-lg-2 ">JOIN US</button>
                    <button className="orange col-sm col-lg-2 offset-1"> SETTINGS</button>
                   
                </div>
                <div className="row">
                    <button className="pink col-sm col-lg-2">LOGIN</button>
                    <button className="purple col-sm col-lg-2 offset-1">CONTACT US</button>
                    
                </div>
                <div className="row">
                    <button className="greenyellow col-sm col-lg-2">SEARCH</button>
                    <button className="red col-sm col-lg-2 offset-1">HELP</button>
                    
                </div>
                <div className="row">
                    <button className="green col-sm col-lg-2">HOME</button>
                    <button className="grey col-sm col-lg-2 offset-1">DOWNLOAD</button>
                    
                </div>
            </div>
        </div>


    );
};

export default Button;

