import React from 'react';
function MobileList(props){
    return(
        <div className="mx-5">
            <h1>Mobile Manufacturers</h1>
            <ul>
                <li>{props.data2[0]}</li>
                <li>{props.data2[1]}</li>
                <li>{props.data2[2]}</li>
                <li>{props.data2[3]}</li>
            </ul>
        </div>
    )
}
export default MobileList