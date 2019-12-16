import React from "react";
import Card from "./card.js";
const data = {
    name: "Mihir Kumar",
    location: "KOLKATA",
    description: "User interface designer and front-end developer",
    skills: [
        "UI/UX",
        "Front End Development",
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Node"
    ]
};
class App extends React.Component {
    render() {
        return (
            <div>
                <Card {...data} />
            </div>
        );
    }
}

export default App;
