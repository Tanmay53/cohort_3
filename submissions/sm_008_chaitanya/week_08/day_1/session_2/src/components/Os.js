import React from 'react';
 function OsList(props){
     return(
        <div className="mx-5 mt-3">
            <h1>Mobile Operating System</h1>
            <ul>
                <li>{props.data1[0]}</li>
                <li>{props.data1[1]}</li>
                <li>{props.data1[2]}</li>
                <li>{props.data1[3]}</li>
            </ul>
        </div>
     )
 }
 export default OsList