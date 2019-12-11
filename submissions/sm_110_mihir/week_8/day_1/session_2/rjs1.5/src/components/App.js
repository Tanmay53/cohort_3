import React from "react";
import Button from "./button";

const join = { label: "JOIN US", color: "btn-primary" };
const setting = { label: "SETTINGS", color: "btn-info" };

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Button {...join} />
                    </div>
                    <div className="col-6">
                        <Button {...setting} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Button label="LOGIN" color="btn-warning" />
                    </div>
                    <div className="col-6">
                        <Button label="CONTACT US" color="btn-danger" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Button label="SEARCH" color="btn-success" />
                    </div>
                    <div className="col-6">
                        <Button label="HELP" color="btn-info" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Button label="HOME" color="btn-secondary" />
                    </div>
                    <div className="col-6">
                        <Button label="DOWNLOAD" color="btn-success" />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
