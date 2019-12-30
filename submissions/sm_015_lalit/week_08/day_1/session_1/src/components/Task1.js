import React from 'react';

const listSquare = {
    "list-style-type": "square"
}
const listCircle = {
    "list-style-type": "circle"
}

function Task1(){
    return (
            <div>
                <h1>Mobile Operating System</h1>
                <ul>
                    <li>Android</li>
                    <li>Blackberry</li>
                    <li>iPhone</li>
                    <li>Windows Phone</li>
                </ul>
                <h1>Mobile Manufacturers</h1>
                <ul>
                    <li style={listSquare}>Samsung</li>
                    <li style={listSquare}>HTC</li>
                    <li>Micromax</li>
                    <li style={listCircle}>Apple</li>
                </ul>
            </div>
        );
}

export default Task1;