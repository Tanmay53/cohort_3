import React from "react"

function StaticCard(props) {
    let listItem = props.list.map(item => {
        return <li>{item}</li>;
    });

    return (
        <div>
            <h1>{props.heading}</h1>
            <ul>
                {listItem}
            </ul>
        </div> 
    );
}

export default StaticCard