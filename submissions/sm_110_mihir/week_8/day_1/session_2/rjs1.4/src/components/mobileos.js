import React from "react";

const Mobileos = props => {
    const listItem = props.list.map(ele => <li>{ele}</li>);
    return (
        <div>
            <h1>{props.heading}</h1>
            <ul>{listItem}</ul>
        </div>
    );
};

export default Mobileos;
