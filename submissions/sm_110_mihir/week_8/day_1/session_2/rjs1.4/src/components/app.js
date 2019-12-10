import React from "react";
import Mobileos from "./mobileos.js";

const obj1 = {
    heading: "Mobile Opearating System",
    list: ["Android", "Blackberry", "iPhone", "Windows Phone"]
};

const obj2 = {
    heading: "Mobile Manufacturers",
    list: ["Samsung", "HTC", "Micromax", "Apple"]
};
class App extends React.Component {
    render() {
        return (
            <div>
                <Mobileos {...obj1} />
                <Mobileos {...obj2} />
            </div>
        );
    }
}

export default App;
