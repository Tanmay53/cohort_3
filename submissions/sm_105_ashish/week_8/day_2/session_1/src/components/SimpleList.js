import React from 'react';

class SimpleList extends React.Component{
    render(){
        return (
            <div>
                <h1>Mobile Operating System</h1>
                <ul>
                    <li>Android</li>
                    <li>Blackberry</li>
                    <li>iphone</li>
                    <li>windows Phone</li>
                </ul>
                <h1>Mobile Manufacturers</h1>
                <ul >
                    <li  class="square">Samsung</li>
                    <li class="square">HTC</li>
                    <li>Micromax</li>
                    <li class="dot">Apple</li>
                </ul>
            </div>
        );
    }
}

export default SimpleList