import React from 'react';

function ListBy (props){
    return (
        <div>
        <div className ='col-1 mx-4 my-2'>
                            <img src={props.url}/>
                            <p>{props.Name}</p>
                            </div>
                     
        </div>
    )
}
export default ListBy;