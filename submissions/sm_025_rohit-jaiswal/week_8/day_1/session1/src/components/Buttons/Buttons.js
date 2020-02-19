import React from 'react'
export default class Buttons extends React.Component{
render(){
    return(
        <div>
            <div>
                <button type="button" class="btn btn-primary m-2">Join Us</button>
                <button type="button" class="btn btn-secondary">Settings</button>
            </div>
            <div>
                <button type="button" class="btn btn-success m-2">Login</button>
                <button type="button" class="btn btn-danger">Contact Us</button>
            </div>
            <div>
                <button type="button" class="btn btn-warning m-2">Search</button>
                <button type="button" class="btn btn-info">Help</button>
            </div>
            <div>
                <button type="button" class="btn btn-dark m-2">Home</button>
                <button type="button" class="btn btn-dark">Download</button>
            </div>
        </div>
    )
   }
}
