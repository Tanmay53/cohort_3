import React from 'react';

const Mobile = (props) => {
    return (
        <div>
            <h1>{props.heading}</h1>
            <ul>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
                <li>{props.item3}</li>
                <li>{props.item4}</li>
            </ul>
        </div>
    );
}

export default Mobile