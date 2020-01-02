import React from 'react'
import './Buttons.css' 
class Buttons extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <button className="btn joinBtn" >JOIN US</button>
                    <button className="btn settingsBtn">SETTINGS</button>
                </div>
                <div>
                    <button className="btn loginBtn">LOGIN</button>
                    <button className="btn contactBtn">CONTACT US</button>
                </div>
                <div>
                    <button className="btn searchBtn">SEARCH</button>
                    <button className="btn helpBtn">HELP</button>
                </div>
                <div>
                    <button className="btn homeBtn">HOME</button>
                    <button className="btn downloadBtn">DOWNLOAD</button>
                </div>
            </div>
        )
    }
}

export default Buttons