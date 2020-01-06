import React from 'react';

class Mobile extends React.Component {
    render() {
        return (
            <div>
                <h1>Mobile Operating System</h1>
                <ul>
                    <li>Android</li>
                    <li>Blackberry</li>
                    <li>iPhone</li>
                    <li>Windows Phone</li>
                </ul>

                <h1>Mobile Manufactures</h1>
                <ul>
                    <li type="square">Samsung</li>
                    <li type="square">HTC</li>
                    <li>Micromax</li>
                    <li type="circle">Apple</li>
                </ul>
            </div>

        )
    }
}

export default Mobile