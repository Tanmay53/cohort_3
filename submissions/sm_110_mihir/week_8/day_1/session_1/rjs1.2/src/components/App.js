import React from "react";
import Join from "./join.js";
import Settings from "./settings";
import Login from "./login";
import Contact from "./contact";
import Search from "./search";
import Help from "./help";
import Home from "./home";
import Download from "./download";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Join />
                    </div>
                    <div className="col-6">
                        <Settings />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Login />
                    </div>
                    <div className="col-6">
                        <Contact />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Search />
                    </div>
                    <div className="col-6">
                        <Help />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Home />
                    </div>
                    <div className="col-6">
                        <Download />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
