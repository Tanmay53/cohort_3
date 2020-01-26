import React, { Component } from 'react'

export default class Auth extends Component {



    render() {
        return (
            <div>
                <div className="container-fluid bg-dark">
                    <div className="displa-4 text-white">Vehicle Details</div>
                    <div className="container">
                        <form action="">
                            <label>User Name</label>
                            <input type="text"/>
                            <br></br>
                            <label>Password</label>
                            <input type="text"/>
                        </form>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
