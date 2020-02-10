import React from 'react';
import styles from './Buttons.css';
class Buttons extends React.Component{
    render(){
        return (
            <div className="main">
                <button className="blue">JOIN US</button>
                <button className="info">SETTINGS</button>
                <button className="orange">LOGIN</button>
                <button className="red">CONTACT US</button>
                <button className="green">SEARCH</button>
                <button className="purple">HELP</button>
                <button className="pink">HOME</button>
                <button className="brown">DOWNLOAD</button>
            </div>
        )
    }
}
export default Buttons