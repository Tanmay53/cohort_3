import React from "react";
import Os from "./Os";
import Button from "./Button";
import "./Button.css"
import "./card.css"
import Card from "./card";

class App extends React.Component{
    render(){
        return (
            <div>
                <Os />
                <br></br>
                <Button />
                <br></br>
                <Card />
            </div>
        );
    }
}
export default App