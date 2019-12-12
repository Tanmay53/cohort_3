import React from "react";
import "./Components/style.css";
import StopWatch from "./Components/StopWatch";
import Timer from "./Components/Timer";
export default class App extends React.Component {
    render() {
        return (
            <div>
                <StopWatch />
                <Timer />
            </div>
        );
    }
}
