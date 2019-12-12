import React from 'react';
import './buttons.css';

const Button = () => {
    return (
        <div className = "flex-row">
            <div className = "flex-col">
                <button className = "blue">JOIN US</button>
                <button className = "orange">LOGIN</button>
                <button className = "green">SEARCH</button>
                <button className = "magenta">HOME</button>
            </div>
            <div className = "flex-col">
                <button className = "lblue">SETTINGS</button>
                <button className = "red">CONTACT US</button>
                <button className = "purple">HELP</button>
                <button className = "brown">DOWNLOAD</button>
            </div>
        </div>
    );
};

export default Button;