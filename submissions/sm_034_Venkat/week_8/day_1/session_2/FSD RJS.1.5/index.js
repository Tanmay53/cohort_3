import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

function Parent(props) {
    const info = [{ label: "JION US", color: "green" }, { label: "SETTINGS", color: "orange" },
    { label: "LOGIN", color: "yellow" }, { label: "SEARCH", color: "lime" },
    { label: "CONTACT US", color: "tomato" }, { label: "HELP", color: "wheat" },
    { label: "HOME", color: "blue" }, { label: "DOWNLOAD", color: "red" },]

    const children = info.map((each) => {
        console.log(each.label, each);
        return <div key={each.color} style={{ backgroundColor: each.color }}>{each.label}</div>
    });
    console.log(children)
    return <div id="renderingDiv">{children}</div>
}
ReactDOM.render(<Parent />, document.getElementById('root'));