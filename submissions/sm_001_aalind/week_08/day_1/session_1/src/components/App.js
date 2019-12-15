import StaticCard from "./StaticCard";
import Button from "./Button"
import React from "react";
import "./style.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <StaticCard heading="Mobile Operating System" list={["Android", "Blackberry", "iPhone", "Windows Phone"]} />
                <StaticCard heading="Mobile Manufacturers" list={["Samsung", "HTC", "Micromax", "Apple"]} />
                <div className="buttonDiv">
                    <Button text="JOIN US" color="blue" />
                    <Button text="SETTINGS" color="grey" />
                    <Button text="LOGIN" color="#F5983B" />
                    <Button text="CONTACT US" color="red" />
                    <Button text="SEARCH" color="green" />
                    <Button text="HELP" color="purple" />
                    <Button text="HOME" color="#E35489" />
                    <Button text="DOWNLOAD" color="#907229" />
                </div>
            </div> 
        )
    }
}

export default App